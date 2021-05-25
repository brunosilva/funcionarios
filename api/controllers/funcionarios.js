module.exports = () => {
    const funcionarios = require('../data/funcionarios.json');
    const controller = {};
  
    controller.listFuncionarios = (req, res) => res.status(200).json(funcionarios);


    controller.funcionarioId = (req, res) => {
        let func = funcionarios.data.find(e => e.id === req.params.id)
        res.status(200).json(func)
    }

    controller.funcionarioName = (req, res) => {
        let func = funcionarios.data.find(e => e.name === req.params.name)
        res.status(200).json(func)
    }

    controller.funcionarioCpf = (req, res) => {
        let func = funcionarios.data.find(e => e.cpf === req.params.cpf)
        res.status(200).json(func)
    }

    controller.funcionarioCargo = (req, res) => {
        let func = funcionarios.data.find(e => e.cargo === req.params.cargo)
        res.status(200).json(func)
    }

    controller.funcionarioUf = (req, res) => {
        let func = funcionarios.data.filter(e => e.ufNasc === req.params.ufNasc)
        res.status(200).json(func.length)
    }


    controller.funcionarioAtivos = (req, res) => {
        let func = funcionarios.data.filter(e => e.status === req.params.status.toUpperCase())
        res.status(200).json(func)
    }


    return controller;
  }