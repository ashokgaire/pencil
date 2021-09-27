// database helper class insert the demo data on database


const MongoClient = require('mongodb').MongoClient
require('dotenv/config');



// database connection
MongoClient.connect(process.env.DB_CONNECTION, (err, client) => {
  if (err) return console.error(err)
   const db = client.db("test")
    
   console.log("inserting sample data to tree collection")

   db.collection('topics').insertMany( [
   { _id: "Special theory", parent: "Relativity" },
   { _id: "General theory", parent: "Relativity" },
   { _id: "Heisenberg's principle", parent: "Quantum mechanics" },
   { _id: "Wave particle duality", parent: "Quantum mechanics" },
   { _id: "Electron charge", parent: "Charge of particles" },
   { _id: "Charge of particles", parent: "Electrostatics" },
   { _id: "Relativity", parent: "Modern physics" },
   { _id: "Quantum mechanics", parent: "Modern physics" },
   { _id: "Electrostatics", parent: "Physics" },
   { _id: "Modern physics", parent: "Physics" },
   { _id: "Physics", parent: null }
])

   console.log("inserting sample data to questions collection")

   db.collection('questions').insertMany( [
   { question: "Question on Heisenberg's or wave particle duality", Annotations: ["Wave particle duality", "Heisenberg’s principle"] },
   { question: "Question on Electron Charge or Heisenberg’s", Annotations: ["Electron charge", "Heisenberg’s principle."] },
   { question: "Question on General Theory?", Annotations: ["General theory"] },
   { question: "Question on Electron Charge", Annotations: ["Electron charge"] },
   { question: "What is Physics?", Annotations: ["Physics"] },
   { question: "What is Modern Physics?", Annotations: ["Modern physics"] },
   { question: "define Electrostatics?", Annotations: ["Electron charge"] },
   { question: "Question on Electron Charge", Annotations: ["Electrostatics"] },
   { question: "Write short note on Quantum mechanics?", Annotations: ["Quantum mechanics"] },
   { question: "What is Relativity?", Annotations: ["Relativity"] },


   ]) 
db.collection('topics').createIndex( { parent: 1 } )   
console.log("done,press ctrl+c to exit")
  
})

