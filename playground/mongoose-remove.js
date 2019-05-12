const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//      console.log(result);
// });

// Todo.findOneAndRemove({_id:'5cd7c66f3f27a5264c4847c4'}).then((todo) => {
//         console.log(todo);
// });

// Todo.findOneAndRemove({text:'something to do'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5cd7c4553f27a5264c4845cb').then((todo) => {
     console.log(todo);
});