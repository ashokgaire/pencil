# Setup  and Run
- npm init
- npm start


# Docs
## How to Check 
- app deployed on heroku on https://test-pencil.herokuapp.com/
- search endpoint /search
- usage /search?q="topicname"
- examples: 
-https://test-pencil.herokuapp.com/search?q=%22Transport%20in%20Flowering%20Plants%22
- https://test-pencil.herokuapp.com/search?q=%22Biological%20Molecules%22
- https://test-pencil.herokuapp.com/search?q="Chloroplasts"
- https://test-pencil.herokuapp.com/search?q=%22Breakdown%20of%20red%20blood%20cells%22


## App  Structure
- entry point app.js
- search router code is in routes/searchRouter.js

# Database Structure
- uses mongodb with two table `Topics` and `Questions`
- Topics table is in parent based tree structure and indexing on parent label to make queries faster 
- Questions table have question and annotation(list based)
- topics table structure exmaple.  
 ```
   { _id: "Quantum mechanics", parent: "Modern physics" },
   { _id: "Modern physics", parent: "Physics" },
   { _id: "Physics", parent: null }```

- questions table structure example.
```{ question: "Question on Heisenberg's or wave particle       duality", Annotations: ["Wave particle duality", "Heisenberg’s principle"] },
   { question: "Question on Electron Charge or Heisenberg’s", Annotations: ["Electron charge", "Heisenberg’s principle."] },
   ```


# How search endpoint works 
- search endpoint makes two query request 
- 1. one for retreving childern topics from given query topic and stores list of result
- 2. another query only runs if first query return result and checks for all question thats matches the first query result list of topics



# Database creds
- creds are stored in .env file 
- database name test
- collections 
- 1. questions
- 2 . topics
- 
