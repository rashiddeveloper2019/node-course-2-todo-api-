const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5cd033f7dd65be4e27f9f2f4';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

//  Todo.find({
//      _id: id
//  }).then((todos) => {
//      console.log('Todos', todos);
//  });

//  Todo.findOne({ 
//      _id:id   
//  }).then((todo) => {
//      console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todos By Id',todo);
// }).catch((e) => console.log(e));

User.findById('5cd64aff3f27a5264c47e486').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
   }
console.log("hello" ,user)
   console.log(JSON.stringify(user,undefined,2));
}, (e) => {
console.log(e);
});