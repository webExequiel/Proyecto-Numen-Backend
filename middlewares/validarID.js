const {Jugador} = require('../models/jugador');
const validarID = async (req, res, next) => {
    try {
        const persona = await Jugador.findById(req.params.id);
        console.log('Hola estoy en el middleware')
        if (persona !== null) {
            next();
        } else {
            res.status(400).json({
                msg: 'el id ' + req.params.id + ' ingresado es invalido'
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }

};

module.exports = {validarID};