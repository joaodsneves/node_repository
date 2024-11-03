const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Conexão com o banco de dados
const sequelize = new Sequelize('database', 'root', 'rootpassword', {
  host: 'db',
  dialect: 'mysql'
});

// Comentário para definir modelos no futuro
// Exemplo:
// const Modelo = sequelize.define('Modelo', {
//   atributo: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// Sincronizar o modelo com o banco de dados, caso seja necessário no futuro
// (use com cuidado em produção para evitar perda de dados)
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    // await sequelize.sync();  // Sincroniza o modelo com o banco de dados (descomente quando definir modelos)
    console.log('Modelo sincronizado com o banco de dados (quando definido).');
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
})();

// Configurar o Express
const app = express();
app.use(express.json());

// Comentários para futuras rotas CRUD:
// Para criar um novo recurso:
// app.post('/recurso', async (req, res) => {
//   const recurso = await Modelo.create(req.body);
//   res.json(recurso);
// });

// Para obter todos os recursos:
// app.get('/recurso', async (req, res) => {
//   const recursos = await Modelo.findAll();
//   res.json(recursos);
// });

// Para atualizar um recurso por ID:
// app.put('/recurso/:id', async (req, res) => {
//   const recurso = await Modelo.findByPk(req.params.id);
//   if (recurso) {
//     await recurso.update(req.body);
//     res.json(recurso);
//   } else {
//     res.status(404).json({ error: 'Recurso não encontrado' });
//   }
// });

// Para deletar um recurso por ID:
// app.delete('/recurso/:id', async (req, res) => {
//   const recurso = await Modelo.findByPk(req.params.id);
//   if (recurso) {
//     await recurso.destroy();
//     res.json({ message: 'Recurso deletado com sucesso' });
//   } else {
//     res.status(404).json({ error: 'Recurso não encontrado' });
//   }
// });

// Iniciar o servidor
app.listen(5000, () => {
  console.log('Servidor backend rodando na porta 5000');
});
