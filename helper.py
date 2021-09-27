# easy peassy with python

import pandas as pd
import numpy as np
from pymongo import MongoClient
import pymongo


data = pd.read_csv("data.csv")

annoations = []
anno_1 = data["Annotation 1"].to_list()
anno_2 = data["Annotation 2"].to_list()
anno_3 = data["Annotation 3"].to_list()
anno_4 = data["Annotation 4"].to_list()
anno_5 = data["Annotation 5"].to_list()

for i in range(len(data)):
	temp = []
	if isinstance(anno_1[i], str):
		temp.append(anno_1[i])
	if isinstance(anno_2[i], str):
		temp.append(anno_2[i])
	if isinstance(anno_3[i], str):
		temp.append(anno_3[i])
	if isinstance(anno_4[i], str):
		temp.append(anno_4[i])
	if isinstance(anno_5[i], str):
		temp.append(anno_5[i])
	annoations.append({"question":i+1, "Annotations": temp})



#print(annoations)
client = pymongo.MongoClient("mongodb+srv://test:test@cluster0.h1sa1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.test
db["questions"].insert_many(annoations)