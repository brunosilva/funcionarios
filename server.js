const app = require('./config/express')();
// const port = require('./config/default');
const port = process.env.PORT || app.get('port');

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});