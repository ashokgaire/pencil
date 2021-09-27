const express = require("express");
const router = express.Router();
const MongoClient = require('mongodb').MongoClient


//handle  get request
// example usage /search?q="Quantum Mechanics" 
router.get("/", async (req, res) => {
  const query = req.query.q.replace(/\"/g,"");  // save the query

  // database connection
  MongoClient.connect(process.env.DB_CONNECTION, async (err, client) => {
   if (err) return console.error(err)
   const db = client.db("test")

  // first query to get list of topics we need to lookup to get questions
  // get all childern topics from the query  
  // using aggregate to traversal the graph and store the result in array 
  const response = await db.collection('topics').aggregate([

      {$match : {_id: query }},    // match a query to get starting node to graph traversal 
      
      // graph lookup 
      {$graphLookup: {
         from: "topics",
         startWith: "$_id",
         connectFromField: "_id",
         connectToField: "parent",
         as: "childern",
       }
     }]).toArray()


   // process further if response has length
   if(response[0]){
   
   const topics = response[0]["childern"];  // we only need the childern array from result array 
   let topics_to_lookup = [query]      // list to store topics to search question from , initially putting the requested query

   // loop through topics and store id only
   for(let i = 0; i < topics.length; i++){
      topics_to_lookup.push(topics[i]["_id"])
   }
  

   // second query to get realted questions
   // TODO: only returns question in array from query like .find({}, {"question":1}) not working now for no reason
   const res1 = await db.collection('questions').find({"Annotations": {"$in":topics_to_lookup}}).toArray()
   

   // we only need question
   let questionlist = []
   for(let i =0; i< res1.length; i++){
    questionlist.push(res1[i]["question"])
   }

     if (questionlist.length > 0){
      res.json({ "questions": questionlist });
      }
    else{
      res.json({"message" : "No questions found .."})
     }

  }

   else{
    res.json({"message" : "No questions found .."})
   }


  })
  
});

module.exports = router;