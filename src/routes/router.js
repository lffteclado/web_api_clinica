const express  = require('express');
const controller = require('../controller/controller');

const router = express.Router();

router.get('/clinica/', controller.buscarTodos);
router.post('/clinica/', controller.criar);

module.exports = router;