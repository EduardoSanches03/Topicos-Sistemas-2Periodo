const  express = require("express");
const rotas = express.Router();
const pedidoController = require("./controller/pedidoController");
const dadosClienteController = require("./controller/dadosCliente.Controller");

rotas.get('/pedido', pedidoController.read);
rotas.post('/pedido', pedidoController.create);
rotas.post('/pedido/:id', pedidoController.update);


rotas.get('/menu', dadosClienteController.menu);
rotas.get('/menu.html', dadosClienteController.menu);
rotas.get('/menuCliente.html', dadosClienteController.menuCliente);
rotas.get('/listarCliente.ejs', dadosClienteController.listar);
rotas.get('/formCadastro.html', dadosClienteController.formCadastro);
rotas.post('/dados', dadosClienteController.registrar);

module.exports = rotas;