import json
import argparse
def test(i):
    # print("run test")
    # print(i)
    # with open('countries.json') as json_data:
    #     for entry in json_data:
    #         print(type(entry))
    #         print(entry)
    # print(json.loads(i))
    # print(type(i))
    # print(type(json.loads(i)))
    # print(json.loads(i))
    # print(i)
    # print(type(i))
    # samples = json.loads(i) # the predicted results
    print(json.dumps(i))
    # print({"test":"testvalue"})

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--refs_file", type=str, required=True)
    args = parser.parse_args()
    newtext = json.loads(i)
    # samples = json.load(open(args.gens_file)) # the predicted results
    # refs_list = json.load(open(args.refs_file)) # the val_annots locations

    test(newtext)


