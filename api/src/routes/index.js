const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./dogs.js')
const dog = require('./dog.js')
const temperament = require('./temperament')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs)
router.use('/dog', dog)
router.use('/temperament', temperament)


module.exports = router;
