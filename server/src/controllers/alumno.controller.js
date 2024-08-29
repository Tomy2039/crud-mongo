import { alumna } from "../models/models.js";

export const getAlumno = async (req, res) => {
    try {
        const alumnos = await alumna.find();
        res.json(alumnos);
    } catch (error) {
        res.status(500).send("Error al obtener los alumnos");
    }
};

export const getUnAlumno = async (req, res) => {
    try {
        const { id } = req.params;
        const alumno = await alumna.findById(id);
        res.json(alumno);
    } catch (error) {
        res.status(500).send("Error al obtener el alumno");
    }
}

export const postAlumno = async (req, res) => {
    try {
        const { nombre, apellido, curso } = req.body;
        const newAlumno = new alumna({ nombre, apellido, curso });
        await newAlumno.save();
        res.json({ message: "Alumno guardado" });
    } catch (error) {
        res.status(500).send("Error al guardar el alumno");
    }
}

export const putAlumno = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, curso } = req.body;
        const newAlumno = { nombre, apellido, curso };
        await alumna.findByIdAndUpdate(id, newAlumno);
        res.json({ message: "Alumno actualizado" });
    } catch (error) {
        res.status(500).send("Error al actualizar el alumno");
    }
}

export const deleteAlumno = async (req, res) => {
    try {
        const { id } = req.params;
        await alumna.findByIdAndDelete(id);
        res.json({ message: "Alumno eliminado" });
    } catch (error) {
        res.status(500).send("Error al eliminar el alumno");
    }
}