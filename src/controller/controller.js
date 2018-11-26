const Consulta = require('../model/consulta');
const Faturamento = require('../model/faturamento');
const status = require('http-status');

exports.buscarTodos = (request, response, next)=>{
    let limite  = parseInt(request.query.limite || 0);
    let pagina = parseInt(request.query.pagina || 0);

    if(!Number.isInteger(limite) || !Number.isInteger(pagina)){
        response.status(status.BAD_REQUEST).send();
    }

    const ITENS_POR_PAGINA = 10;

    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;

    Consulta.findAll({limit:limite, offset:pagina})
        .then(consulta =>{
            response.send(consulta)
        })
        .catch(error => next(error));
};

exports.criar = (request, response, next) =>{
    const especialidade = request.body.especialidade;
    const quantidade = request.body.quantidade;
    const situacao = request.body.situacao;

    Consulta.create({
        especialidade:especialidade,
        quantidade:quantidade,
        situacao:situacao
    })
    .then(()=>{
        response.status(status.CREATED).send();
    })
    .catch(error => next(error));
};

exports.buscarTodosFat = (request, response, next) =>{
    
    let limite  = parseInt(request.query.limite || 0);
    let pagina = parseInt(request.query.pagina || 0);
    
    if(!Number.isInteger(limite) || !Number.isInteger(pagina)){
        response.status(status.BAD_REQUEST).send();
    }

    const ITENS_POR_PAGINA = 10;

    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;

    Faturamento.findAll({limit:limite, offset:pagina})
        .then(faturamento =>{
            response.send(faturamento)
        })
        .catch(error => next(error));
};

exports.criarFat = (request, response, next) =>{
    const descricao = request.body.descricao;
    const valor = request.body.valor;

    Faturamento.create({
        descricao:descricao,
        valor:valor
    })
    .then(()=>{
        response.status(status.CREATED).send();
    })
    .catch(error => next(error));
};