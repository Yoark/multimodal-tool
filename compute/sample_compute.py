import json
import copy

samples = json.load(open('../public/data/200_sample_val_conv.json') # /Compare/200_sample_val_conv.json'))
excluded = ['inference_relation', 'generations', 'intents', 'befores', 'afters', 'bad', 'events']

# convert 1 sample to correct format for computing metrics
inst = {k:v for k,v in samples[0].items() if k not in excluded}

def split_sample(inst, inf_name, event):
    ins = copy.deepcopy(inst)
    ins['inference_relation'] = inf_name
    ins['generations'] = [event[inf_name]]
    ins['event_idx'] = event['event_idx']
    return ins

new_sample = []
for event in samples[0]['events']:
    new_sample.append(split_sample(inst, 'intent', event))
    new_sample.append(split_sample(inst, 'before', event))
    new_sample.append(split_sample(inst, 'after', event))

data_val_ground = json.load(open('/home/zijiao/research/data/visualcomet/val_annots.json'))

compute_metric_inference(new_sample, data_val_ground, calculate_diversity=False, train_file=None)
