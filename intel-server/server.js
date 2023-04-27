const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended: true})) 
var cors = require('cors');
app.use(cors());
const MongoClient = require('mongodb').MongoClient
let db;
MongoClient.connect('mongodb+srv://trainerlee:intelintern@cluster0.b2yfnnx.mongodb.net/?retryWrites=true&w=majority', function(err, client){
    if (err) return err;
    app.listen(8080, function(){
        console.log('listening on 8080');
    });
    db = client.db('intel_intern_project'); 

})



app.get('/', function(req, res){
    db.collection('post').find().toArray(function(err, result){
        console.log(result);
        res.send(result);
    })
})

app.post('/add', function(req, res){
    console.log(req.body);
    res.send('message sent.')
    db.collection('post').insertOne({jobTitle: req.body.jobTitle, jobDescription: req.body.jobDescription}, function(){
        console.log('저장완료');
    })
})