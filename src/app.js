const http = require('http');
const express = require('express');
const status = require('http-status');
const clinicaRouter = require('./routes/router');
const sequelize = require('./database/database');

const app = express();

app.use(express.json());

app.use('/api', clinicaRouter);

app.use((request, response, next)=>{
    response.status(status.NOT_FOUND).send();
});

app.use((request, response, next)=>{
    response.status(status.INTERNAL_SERVER_ERROR).json({error});
});

sequelize.sync({force:false}).then(()=>{
    const port = process.env.PORT || 3000;

    console.log('Listen port:', port);

    app.set('port', port);

    const server = http.createServer(app);

    server.listen(port);
});
