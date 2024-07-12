import { Server } from 'azle';
import express from "express";

export default Server(() => {
    const db ={
        ph:0,
        turbidez:0,
        conductividad:0
    }
    const app = express();
    app.use(express.json());

    app.get('/users', (req, res) => {
        const users = [
            {
                name: "Juanito",
                edad: 25
            },
            {
                name: "Angelito",
                edad: 22
            },
            {
                name: "Josesito",
                edad: 24
            },
            {
                name: "Manuelito",
                edad: 27
            },
            {
                name: "Abelardito",
                edad: 30
            },
        ];
        return res.status(200).json(users)
    })

    //POST es para crear
    app.post("/guardar-datos",(req,res)=>{
        db.ph = req.body.ph;
        db.turbidez = req.body.turbidez;
        db.conductividad = req.body.conductividad;
        return res.status(200).send('ok')
    })

    //PUT es para actualizar

    //GET es para obtener

    app.get('/obtener-datos',(req,res)=>{
        return res.json(db)
    })

    //DELETE para eliminar

    return app.listen();
})