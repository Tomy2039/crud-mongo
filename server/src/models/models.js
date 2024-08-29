import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    }
})

export const alumna = mongoose.model('alumno',Schema);