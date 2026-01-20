const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());

function leerJSON(nombre) {
    const ruta = path.join(__dirname, "..", "data", nombre);
    const contenido = fs.readFileSync(ruta, "utf8");
    return JSON.parse(contenido);
}

app.get("/api/equipos", (req, res) => {
    res.json(leerJSON("equipos.json"));
});

app.get("/api/tabla", (req, res) => {
    res.json(leerJSON("tabla.json"));
});

app.get("/api/partidos", (req, res) => {
    res.json(leerJSON("partidos.json"));
});

app.listen(PORT, () => {
    console.log(`API FootballHub La Liga escuchando en http://localhost:${PORT}`);
});

