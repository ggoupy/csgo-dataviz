import pandas as pd

data = pd.read_csv('../../data/dataset/output.csv', sep=',') 
dataRound = pd.read_csv('../../data/dataset/outputRound.csv', sep=',') 

def filter_row(data, kv):
    data_new = data
    for key,value in kv:
        data_new = data_new[data_new[key] == value]
    return data_new

#game_number = 6
#pseudo = "LaMasse"
#data = filter_row(data,[
    #("Game_number",game_number),
    #("Pseudo",pseudo),
#])

data = data[["Game_number","Round_number","Team","dmg","Pseudo","damage_team", "damage_ennemy_team"]]
data = data.sort_values(by="Round_number")
data.to_csv('out.csv', index=False)