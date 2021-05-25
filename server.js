const app = require('./config/express')();

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});