const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
var cors = require('cors');
app.use(cors());
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session()); 
const MongoClient = require('mongodb').MongoClient
let db;

MongoClient.connect('mongodb+srv://trainerlee:intelintern@cluster0.b2yfnnx.mongodb.net/?retryWrites=true&w=majority', function (err, client) {
    if (err) return err;
    app.listen(8080, function () {
        console.log('listening on 8080');
    });
    db = client.db('intel_intern_project');

})

app.post('/loginserver', passport.authenticate('local', {failureRedirect : '/fail'}),function(req,res){
    res.redirect('/')
})

app.get('/', function (req, res) {
    db.collection('Experience').find().toArray(function (err, result) {
        res.send(result);
    })
})

app.post('/addjob', function (req, res) {
    db.collection('Experience').insertOne({ jobTitle: req.body.jobTitle, jobDescription: req.body.jobDescription, timeInMonths: req.body.timeInMonths }, function () {
        console.log('저장완료');
    })
    res.redirect('http://localhost:3000/');
})

passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pw',
    session: true,
    passReqToCallback: false,
  }, function (입력한아이디, 입력한비번, done) {
    console.log(입력한아이디, 입력한비번);
    db.collection('login').findOne({ id: 입력한아이디 }, function (에러, 결과) {
      if (에러) return done(에러)
  
      if (!결과) return done(null, false, { message: '존재하지않는 아이디요' })
      if (입력한비번 == 결과.pw) {
        return done(null, 결과)
      } else {
        return done(null, false, { message: '비번틀렸어요' })
      }
    })
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.id)
  });
  
  passport.deserializeUser(function (아이디, done) {
    done(null, {})
  }); 