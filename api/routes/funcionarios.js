module.exports = app => {
    const controller = require('../controllers/funcionarios')();
  
    const defaultRoute = '/api/v1/funcionarios';

    app.route(defaultRoute)
        .get(controller.listFuncionarios);

    app.route(`${defaultRoute}/:id`)
        .get(controller.funcionarioId);

    app.route(`${defaultRoute}/name/:name`)
        .get(controller.funcionarioName);

    app.route(`${defaultRoute}/cpf/:cpf`)
        .get(controller.funcionarioCpf);

    app.route(`${defaultRoute}/cargo/:cargo`)
        .get(controller.funcionarioCargo);
    
    app.route(`${defaultRoute}/uf/:ufNasc`)
        .get(controller.funcionarioUf);

    app.route(`${defaultRoute}/status/:status`)
        .get(controller.funcionarioAtivos);
  }