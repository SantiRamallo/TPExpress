const express = require('express');
const router = express.Router();
const fs = require('fs');
const sucursalesController = require('../controllers/sucursalesController');




router.get('/', sucursalesController.index)
// router.get('/:idSucursal', sucursalesController.detalle)

module.exports = router;