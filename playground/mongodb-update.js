//  const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
 
 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
     console.log(err,db)
      if(err) {
          return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');
         
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ccc142ad3dd45a781fc79a1')
    // },{
    //     $set:{
    //         completed: true
    //     }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });
  
        db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5ccafeb052cdc24a9b1254aa')
        },{
            $set:{
                name: 'kaju'
            },
            $inc: {
                age: 1
            }
            }, {
                returnOriginal: false
            }).then((result) => {
                console.log(result);
            });
 
        //db.close(); 
});