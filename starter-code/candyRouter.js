var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
	{
		"id":1,
		"name":"Chewing Gum",
		"color":"Red"
	},	
	{
		"id":2,
		"name":"Pez",
		"color":"Green"
	},
	{
		"id":3,
		"name":"Marshmallow",
		"color":"Pink"
	},
	{
		"id":4,
		"name":"Candy Stick",
		"color":"Blue"
	}];

//What would need to go into candies
//in order to pass our first test?


//GET
router.get('/candies', function(req,res) {
	res.json(candies);
});

//SHOW
router.get('/candies/:id', function(req, res) {
  	console.log(req.params.id);
  	var candyGet = req.params.id;
  	//gets array ID but subtracts for array index
  	res.json(candies[candyGet - 1]);
});

//CREATE
router.post('/candies', function(req, res) {
  	candies.push(req.body);
  	res.json(req.body);
});

//GET NEW ARRAY/I think it is already there
// router.get('/candies', function(req, res) {
// 	res.json(req.body);
// });

//PUT
router.put('/candies/:id', function(req, res) {
	//grab candy ID
  	var candyId = req.params.id;
  	//gets ID minus 1 for array index
  	var candyPut = candies[candyId-1];
  	//array index name
  	candyPut.name = req.body.name;
  	//array index color
  	candyPut.color = req.body.color;
  	res.json(candyPut);
});

//DELETE
router.delete('/candies/:id', function(req, res) {
	//grab candy ID
	var candyId = req.params.id;
	//splce out (index, how many)
	candies.splice((candyId-1), 1);
	res.json(candies);
});





















// Fill out the rest of the routes here

module.exports = router;