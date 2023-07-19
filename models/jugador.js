const {Schema, model} = require('mongoose');

const schema = new Schema ({
    nombre:{
        type:String,
        required: true

    },
    apellido:{
        type:String,
        required: true

    },
    nacionalidad:{
        type:String,
        required: true

    },
    club:{
        type:String,
        required: true

    },
    role:{
        type:String,
        require:true,
        enum: ['Portero', 'Defensa Central', 'Lateral Derecho', 'Lateral Izquierdo', 'Pivote', 'Mediocentro', 'Interior Derecho', 'Interior Izquierdo', 'Mediocentro Ofensivo', 'Extremo Izquierdo', 'Extremo Derecho', 'Delantero Centro']

    },
    valorDeMercado:{
        type:String,
        required: true,

    },

});

const Jugador = model('Jugador', schema);
module.exports = {Jugador};