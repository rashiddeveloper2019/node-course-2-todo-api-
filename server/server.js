var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} =require('mongodb')

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log("=========123==========",typeof req.body.text)

    var todo = new Todo({
        text: req.body.text
    
    });  

    todo.save().then((doc) => {
        console.log("00000000000000",doc)
      res.send({msg:"shivam bsdk save hogya",doc:doc});
    }, (e) => {
     res.status(400).send(e);  
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        console.log("rashid chutiya hai",todos)
        res.send({todo:todos,msg:"rasid chutuiya hai"});
    },(e) => {
       res.status(400).send(e);
    })
}); 

app.get('/todos/:id',(req,res)=> {
    var id = req.params.id;
    console.log(id);
    
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
  
    Todo.findById(id).then((todo) => {
        console.log(todo);
        if(!todo) {
            return res.status(400).send();
        }

        res.send({todo});
        
    }).catch((e) => {
        res.status(400).send();
    });
});

app.listen(3000, () => {
     console.log('Started on port 3000');
});

module.exports = {app};