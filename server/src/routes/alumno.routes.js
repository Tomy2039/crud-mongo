import { Router } from "express";

const alumnoRuta = Router();

import {
    getAlumno,
    getUnAlumno,
    postAlumno,
    putAlumno,
    deleteAlumno
} from "../controllers/alumno.controller.js"

alumnoRuta.get('/', getAlumno);
alumnoRuta.get('/:id', getUnAlumno);
alumnoRuta.post('/', postAlumno);
alumnoRuta.put('/:id', putAlumno);
alumnoRuta.delete('/:id', deleteAlumno);

export { alumnoRuta };