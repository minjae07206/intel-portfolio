const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended: true})) 
var cors = require('cors');
app.use(cors());

app.listen(8080, function(){
    console.log('listening on 8080');
});

app.get('/', function(req, res){
    res.send('dfddf')
})

app.post('/add', function(req, res){
    console.log(req.body);
    res.send('message sent.')
})