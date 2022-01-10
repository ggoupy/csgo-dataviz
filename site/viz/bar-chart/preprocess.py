import pandas as pd

data = pd.read_csv('../../../data/dataset/preprocessed/output.csv', sep=',') 

def filter_row(data, kv):
    data_new = data
    for key,value in kv:
        data_new = data_new[data_new[key] == value]
    return data_new


data = data[["Game_number","Round_number","Team","dmg","Pseudo","damage_team","damage_ennemy_team", "dmg_received", "ennemies_flashed", "shots_fired", "shots_hit", "hits_head", "kills"]]
data = data.sort_values(by="Round_number")
data.to_csv('out.csv', index=False)