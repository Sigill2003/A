import { Server } from 'azle';
import express from "express";

export default Server(()=>{

    const app = express();
    app.use(express.json());
    
    const db = {
        date: 0,
        ph: 0,
        turbidez: 0,
        tds: 0
    };
    
    // Ruta para guardar datos usando POST
    app.post("/guardar-datos", (req, res) => {
        db.date = req.body.date;
        db.ph = req.body.ph;
        db.turbidez = req.body.turbidez;
        db.tds = req.body.conductividad;
        return res.status(200).send('Datos guardados correctamente');
    });
    
    // Ruta para obtener datos usando GET
    app.get('/obtener-datos', (req, res) => {
        return res.json(db);
    });

    return app.listen()
})
