# get gens_list, refs_list
from pycocoevalcap.tokenizer.ptbtokenizer import PTBTokenizer
from pycocoevalcap.bleu.bleu import Bleu
from pycocoevalcap.meteor.meteor import Meteor
from pycocoevalcap.cider.cider import Cider

from tqdm import tqdm
import json
import numpy as np
import os
import time
import sys

def compute_metric_inference(gens_list, refs_list, calculate_diversity=False, train_file=None):
    # gens_list, refs_list is a list of generation json and a list of reference json, and I provide a 
    # convert function also.
    scorers = [
        (Bleu(4), ["Bleu_1","Bleu_2", "Bleu_3", "Bleu_4"]),
        (Meteor(), "METEOR"),
        (Cider(), "CIDEr")
    ]
    tokenizer = PTBTokenizer()

    refs = {}
    preds = {}
    output = {}
    cnt = 0

    for i, gens in tqdm(enumerate(gens_list)):
        event_idx = gens['event_idx']
        relation = gens['inference_relation']
        # get a comb evaluation, or per type evaluation
        ref = refs_list[event_idx][relation]
        if len(ref) > 0:
            for pred in gens['generations']:
                pred = pred.replace('<|det', '').replace('|>', '')
                preds[cnt] = [{'caption': pred}]
                refs[cnt] = [{'caption': r} for r in ref]
                cnt += 1

    refs = tokenizer.tokenize(refs)
    preds = tokenizer.tokenize(preds)

    if calculate_diversity:
        unique_sents = []
        novel_sents = []

        # store train sentence to calculate novelty
        train_sents = json.load(open(train_file))
        ts = set()
        for d in train_sents:
            for r in ['intent', 'before', 'after']:
                if r in d:
                    for sent in d[r]:
                        r_sent = use_same_id(sent)
                        ts.add(r_sent)

        for pred in preds.values():
            pred_same_id = use_same_id(pred[0])
            unique_sents.append(pred_same_id)
            novel_sents.append(pred_same_id not in ts)

        print(len(unique_sents))
        unique = len(set(unique_sents)) / len(unique_sents)
        output['Unique'] = unique
        print('Unique Inferences:', unique)

        novel = np.mean(novel_sents)
        output['Novel'] = novel
        print('Novel Inferences:', novel)

    for scorer, method in scorers:
        score, scores = scorer.compute_score(refs, preds)
        if type(method) == list:
            for m in range(len(method)):
                output[method[m]] = score[m]
                print(method[m], score[m])
        else:
            output[method] = score
            print(method, score)

    return output
