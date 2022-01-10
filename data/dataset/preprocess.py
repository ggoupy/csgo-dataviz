import pandas as pd

files_to_process = ["positionsAlt.csv", "output.csv", "outputRound.csv"]

# Find games number to delete
d = pd.read_csv("output.csv")
games_to_del = []
for game in d["Game_number"].unique():
	if not "LaMasse" in d[d["Game_number"] == game]["Pseudo"].unique():
		games_to_del.append(game)

# Preprocess function
def preprocess(file):
	d = pd.read_csv(file)
	# Keeps nuke map
	d = d[d["Map"] == "de_nuke"] 
	# Keep games where "LaMasse" (Titouan) is in
	for game in games_to_del:
		d = d[d["Game_number"] != game]
	return d

for file in files_to_process:
	d = preprocess(file)
	d.to_csv("preprocessed/" + file, index=False)