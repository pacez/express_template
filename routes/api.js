var express = require('express');
var router = express.Router();
var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('pana', server, {safe:true});
/* GET users listing. */
router.get('/', function(req, res, next) {
  db.open(function(err, db){
    if(!err){
      res.send('connect pana db...');
      db.createCollection('users', {safe:true}, function(err, collection){
         var tmp1 = {id:1,name:'pacez',pwd:123};
         collection.insert(tmp1,{safe:true},function(err, result){
             console.log(result);
         });
         collection.find().toArray(function(err,docs){
            console.log(docs);
         });
      });
    }
  });

});

module.exports = router;
