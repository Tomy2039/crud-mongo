import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./db/database.js";
import { alumnoRuta } from "./routes/alumno.routes.js";

const app = express()

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use("/alumno", alumnoRuta);
connectDB();

//rutas


//configuracion
app.set('port', process.env.PORT || 3000);

//servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})