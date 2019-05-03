//  const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
 
 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
     console.log(err,db)
      if(err) {
          return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');
         
    // //   db.collection('Todos').find({
    // //       _id:new ObjectID('5ccb2ce6d3dd45a781fc6fef') 
    // //     }).toArray().then((docs) => {
    // //      console.log('Todos');
    // //      console.log(JSON.stringify(docs, undefined, 2));
    // //   }, (err) => {
    // //       console.log('Unable to fetch todod',err);
      
    // //   });

     
    db.collection('Users').find({name: 'mirza md rashid'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    })
        //db.close(); 

      
 });