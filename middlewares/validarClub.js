const {Jugador} = require('../models/jugador');

const clubes = ['CA RIVER PLATE', 'CA BOCA JUNIORS', 'CA VÉLEZ SARSFIELD', 'RACING CLUB',
'CLUB ATLÉTICO TALLERES', 'CLUB ATLÉTICO TIGRE', 'CA SAN LORENZO DE ALMAGRO',
'CA HURACÁN', 'CLUB ATLÉTICO LANÚS', 'CSD DEFENSA Y JUSTICIA', 'CLUB ESTUDIANTES DE LA PLATA',
'CA NEWELLS OLD BOYS', 'CLUB ATLÉTICO COLÓN', 'AA ARGENTINOS JUNIORS', 'CA ROSARIO CENTRAL',
'CA BANFIELD', 'CLUB ATLÉTICO TUCUMÁN', 'CLUB DE GIMNASIA Y ESGRIMA LA PLATA', 'CA INDEPENDIENTE',
'CLUB ATLÉTICO BELGRANO', 'CD GODOY CRUZ ANTONIO TOMBA', 'CLUB ATLÉTICO UNIÓN', 'CA PLATENSE',
'INSTITUTO AC CÓRDOBA', 'CA SARMIENTO', 'CA CENTRAL CÓRDOBA', 'CA BARRACAS CENTRAL', 'ARSENAL FÚTBOL CLUB'];
const validarClub = async (req, res, next) =>{
    try {
        await Jugador.find({club: req.body.club});
        if (clubes === clubes) {
            next();
        } else {
            res.status(400).json({
                msg: 'el club ' + req.body.club + ' es invalido'
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }

}

module.exports = {validarClub};