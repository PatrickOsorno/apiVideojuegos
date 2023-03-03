const express = require('express');
const router = express.Router();
//Controlador con las acciones de las rutas
const videojuegoController = require('../controllers/videojuegoController');
//Rutas de videojuegos

//localhost:3000/videojuego/
router.get('/', videojuegoController.get);

router.post('/', videojuegoController.create); 
//localhost:3000/videojuego/1
router.get('/:id', videojuegoController.getById);

router.put('/:id', videojuegoController.update);

module.exports = router;
