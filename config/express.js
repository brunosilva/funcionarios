const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
  const app = express();

  require('../api/routes/funcionarios')(app);
  // SETANDO VARIÁVEIS DA APLICAÇÃO
  const port = process.env.PORT || 8080;
  app.listen(port)

  // MIDDLEWARES
  app.use(bodyParser.json());

  return app;
};