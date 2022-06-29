var express = require('express');
var router = express.Router();
//const db = require("../models/db");

router.get('/', function(req, res, next){
   // const allTodo = await Todo.find();
    res.render('index.html');
});

module.exports = router;