const {check} = require('express-validator');
const  checks = [
         check('nombre')
            .notEmpty().withMessage('el campo nombre es obligatorio')
            .isString().withMessage('el campo nombre tiene que ser de tipo string'),
         check('apellido')
            .notEmpty().withMessage('el campo apellido es obligatorio')
            .isString().withMessage('el campo apellido tiene que ser de tipo string'),
         check('nacionalidad')
            .notEmpty().withMessage('el campo nacionalidad es obligatorio')
            .isString().withMessage('el campo nacionalidad tiene que ser de tipo string'),
         check('club')
            .notEmpty().withMessage('el campo club es obligatorio')
            .isString().withMessage('el campo club tiene que ser de tipo string'),
         check('role')
            .notEmpty().withMessage('el campo role es obligatorio')
            .isString().withMessage('el campo role tiene que ser de tipo string'),
         check('valorDeMercado')
            .notEmpty().withMessage('el campo valorDeMercado es obligatorio')
            .isString().withMessage('el campo valorDeMercado tiene que ser de tipo string'),               

 ]

 module.exports = checks;