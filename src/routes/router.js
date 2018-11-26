const express  = require('express');
const controller = require('../controller/controller');

const router = express.Router();

router.get('/clinica/consulta/', controller.buscarTodos);
router.post('/clinica/consulta/', controller.criar);
router.get('/clinica/faturamento/', controller.buscarTodosFat);
router.post('/clinica/faturamento', controller.criarFat);

module.exports = router;