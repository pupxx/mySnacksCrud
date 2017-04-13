
var express = require('express');
var router = express.Router();
var knex = require('../db/connection');



//get all route
router.get('/', function(req, res){
  knex('snacks').orderBy('name', 'asc').then(function(allSnacks){
    res.render('snacks/index', {
      allSnacks
    });
  });
});

//Go to Edit page
router.get('/:id/edit', function(req, res){
  var id = req.params.id;
  knex('snacks').where('id', id).first().then((snack)=>{
    res.render(`snacks/edit`,{
      snack: snack
    });
  });
});

//Delete One
router.delete('/:id', function(req, res){
  var id = req.params.id;
  knex('snacks').del().where('id', id).then(function(){
    res.redirect('/snacks');
  });
});

//Go to Create new form
router.get('/new', function(req, res){
  res.render('snacks/new');
});

//get one show one
router.get('/:id', (req, res)=>{
  var id = req.params.id;
  knex('snacks').where('id', id).first().then((snack)=>{
    res.render('snacks/show', {
      snack
    });
  });
});

//Create One
router.post('/', function(req, res){
  var snack = {
    name: req.body.name,
    img_url: req.body['img-url'],
    review_description: req.body['description'],
    rating: req.body.rating
  };
  knex('snacks').insert(snack, '*').then(function(newSnack){
    let id = newSnack[0].id;
    res.redirect(`/snacks/${id}`)
  });
});

//Edit One
router.put('/:id', function(req, res){
  id = req.params.id
  var snack = {
    name: req.body.name,
    img_url: req.body['img-url'],
    review_description: req.body['description'],
    rating: req.body.rating
  }
  knex('snacks').update(snack, '*').where('id', id).then(function(newSnack){
    let id = newSnack[0].id;
    res.redirect(`/snacks/${id}`)
  });
});

module.exports = router;
