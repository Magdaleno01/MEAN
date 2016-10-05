var express =  require('express');
var router = express.Router();
var Modelo = require("../models/modelo");

//Métodos GET

router.get('/', function(req,res,next){
	
Modelo.find({},function(err1,data){
		if (err1) 
		console.log(err1);
		res.json(data);
	});
});


//Métodos POST

router.post('/',function(req,res,next){
	
	Modelo.create(req.body, function(err1,data){
		if (err1) 
		console.log(err1);
		var objeto = req.body;
		objeto.nombre = String(req.body.nombre);
		objeto.creador = String(req.body.creador);
		objeto.telefono= String(req.body.telefono);
		
		res.json(data);
	});
});

//Métodos UPDATE

router.put('/:id', function(req,res,next){
	var id = req.params.id;
	Modelo.findById(id,function(err,data){
		if (err) {
			console.log(err);
		}
		data.nombre = req.body.nombre;
		data.creador = req.body.creador;
		data.telefono = req.body.telefono;

		Modelo.update(id,data,function(err1,data){
			if (err1)
				console.log(err1);
			res.json(data);
		});
	});
});


//Métodos DELETE

router.delete('/:id', function(req,res,next){
	var id = req.params.id;
	Modelo.findByIdAndRemove(id,function(err,data){
		if (err)
		console.log(err);
		res.json(data); 
	});
});




//end delete

module.exports = router;
