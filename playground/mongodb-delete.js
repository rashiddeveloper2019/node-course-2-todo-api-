//  const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
 
 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
     console.log(err,db)
      if(err) {
          return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');
         
     //delete many
    //  db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    //      console.log(result);
    // });

      // deleteOne
    //   db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //       console.log(result);
    //   });

      // findOneAnd Delete
    //   db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //    console.log(result);
    //   });

       
    // db.collection('Users').deleteMany({name:'mirza md rashid'});
    
     db.collection('Users').findOneAndDelete({
         _id: new ObjectID("5ccae56f520db048d58f499c")
     }).then((results) => {
         console.log(JSON.stringify(results, undefined, 2));
     });
        //db.close(); 

      
 });