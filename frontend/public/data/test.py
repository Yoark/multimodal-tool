import argparse
def test():
    print("run test")
    # print(i,j)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--refs_file", type=str, required=True)
    parser.add_argument("--gens_file", type=str, required=True)
    args = parser.parse_args()
    print(args)
    
    # samples = json.load(open(args.gens_file)) # the predicted results
    # refs_list = json.load(open(args.refs_file)) # the val_annots locations

    test()