const Cliente = require("../model/clienteModel");

const path = require('path');
const fs = require('fs');

module.exports={

    async menu(req,res){
        const filePath = path.join(__dirname,'../view/menu.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('Erro ao ler o arquivo:', err);
              return res.status(500).send('Ocorreu um erro ao processar a solicitação.');
            }
            res.set('Content-Type', 'text/html');
            res.send(data);
          });
    },

    async menuCliente(req,res){
        const filePath = path.join(__dirname,'../view/menuCliente.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('Erro ao ler o arquivo:', err);
              return res.status(500).send('Ocorreu um erro ao processar a solicitação.');
            }
            res.set('Content-Type', 'text/html');
            res.send(data);
          });
    },

    async formCadastro(req,res){
        const filePath = path.join(__dirname,'../view/formCadastro.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('Erro ao ler o arquivo:', err);
              return res.status(500).send('Ocorreu um erro ao processar a solicitação.');
            }
            res.set('Content-Type', 'text/html');
            res.send(data);
          });
    },
    
    async deletarCliente(req,res){
      const filePath = path.join(__dirname,'../view/deletarCliente.html');
      fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return res.status(500).send('Ocorreu um erro ao processar a solicitação.');
          }
          res.set('Content-Type', 'text/html');
          res.send(data);
        });
  },

    
    async listar(req, res) {
        const listarClientes = await Cliente.find();
        res.render('listaClientes.ejs', { listarClientes });
    },

    async registrar (req,res){
        const {nome,cpf,telefone,email} = req.body;
        
        const clienteCreate = await Cliente.create ({
            nome,
            cpf,
            telefone,
            email
        }); 
       console.log("Novo cliente cadastrado!");
      
       res.redirect('/menuCliente.html');

    },

    async delete(req, res) {
      const { id } = req.body;
          const clienteDeletado = await Cliente.findByIdAndDelete(id);
          
          console.log('Cliente deletado:', clienteDeletado);
          res.redirect('/menuCliente.html');    
  },

  async atualizar(req, res) {
    const { id } = req.body;
        const atualizarClientes = await Cliente.findById(id);
        res.render('atualizarCliente.ejs', { atualizarClientes });
}


}