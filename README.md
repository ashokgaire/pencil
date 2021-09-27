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
- https://test-pencil.herokuapp.com/search?q=%22Cell%20Structure%20and%20Organisation%22


## App  Structure
- entry point app.js
- search router code is in routes/searchRouter.js

# Database Structure
- uses mongodb with two table `Topics` and `Questions`
- Topics table is in tree structure with parent references and indexing on parent label to make queries faster 
- check this https://docs.mongodb.com/manual/tutorial/model-tree-structures-with-parent-references/
- Questions table have question and annotation(list based)
- topics table structure exmaple.  
 ```
   { _id: "Quantum mechanics", parent: "Modern physics" },
   { _id: "Modern physics", parent: "Physics" },
   { _id: "Physics", parent: null }```

- questions table structure example.
```{ question: "1", Annotations: ["Wave particle duality", "Heisenberg’s principle"] },
   { question: "2", Annotations: ["Electron charge", "Heisenberg’s principle."] },
   ```


# How search endpoint works 
- search endpoint makes two query request 
- 1. one for retreving childern topics from given query topic and stores list of result using graph lookup 
- - check this https://docs.mongodb.com/manual/reference/operator/aggregation/graphLookup/
- 2. another query only runs if first query return result and checks for all question thats matches the first query result list of topics



# Database creds and info
- creds are stored in .env file 
- database name test
- collections 
- 1. questions (total rows 199)
- 2 . topics   (total row 141) ( note 20+ rows is not included from buttom from given sheet ) 
- 
