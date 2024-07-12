import { Server } from 'azle';
import express from "express";
import https from "https";
import fs from "fs";

// Cargar los certificados SSL
const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };

export default Server(() => {
    const db = {
        ph: 0,
        turbidez: 0,
        conductividad: 0
    }
    const app = express();
    app.use(express.json());

    // Ruta para guardar datos usando POST
    app.post("/guardar-datos", (req, res) => {
        db.ph = req.body.ph;
        db.turbidez = req.body.turbidez;
        db.conductividad = req.body.conductividad;
        return res.status(200).send('ok');
    });

    // Ruta para obtener datos usando GET
    app.get('/obtener-datos', (req, res) => {
        return res.json(db);
    });

    // Crear el servidor HTTPS
    const httpsServer = https.createServer(credentials, app);

    // Escuchar en el puerto 443 (HTTPS por defecto)
    return httpsServer.listen(443, () => {
        console.log('Servidor HTTPS iniciado en el puerto 443');
    });
});