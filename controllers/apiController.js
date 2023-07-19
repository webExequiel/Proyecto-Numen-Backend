const {Jugador} = require('../models/jugador');

class ApiController {
    async list(req, res) {
        const personal = await Jugador.find();
        res.status(200).json(personal)
    }

    async crear(req, res) {
        try {
            const nuevaPersona = new Jugador(req.body)
            await nuevaPersona.save()
            res.status(201).json(nuevaPersona)      
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async editar (req, res) {
        try {
            await Jugador.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({
                msg: 'la persona ' + req.params.id + ' fue actualizado'
            })
        } catch (error) {
            res.status(500).json(error)
        }
        
    }

    async eliminar (req, res) {
        await Jugador.findByIdAndDelete(req.params.id)
        res.status(204).json({
            msg: 'la persona ' + req.params.id + ' fue eliminada'
        })  
    }

}

module.exports = new ApiController




// async buscarSegunID(req, res) {
    //     console.log('hola llegue al controlador')
    //     const personal = await Numen.findById(req.params.id);
    //     res.status(200).json(personal)
    // }

    // async buscarSegunRole(req, res) {
    //     const personal = await Numen.findOne({role: req.params.role});
    //     res.status(200).json(personal)
    // }

    // async listPorProfesion(req, res) {
    //     const personal = await Numen.find({role: req.params.role});
        

    //     res.status(200).json(personal)
    // }


/*

{//Borrado Lógico
    nombre: 'Exe',
    emial: 'exe95@hotmial.com',
    misCompras: {},
    active: true
}

//Espejo - Sistema Bancario
{//Vista app
    nombre: 'Exe',
    emial: 'exe95@hotmial.com',
    misCompras: {},
    v1
}
{//respaldo
    nombre: 'Exe',
    emial: 'exe95@hotmial.com',
    misCompras: {},
    contraseñas: 'XXX'
    contraseñas: 'XXX'
    contraseñas: 'XXX'
    v2
}

*/