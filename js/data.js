const API_BASE = "http://localhost:3000/api";

async function fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Error al cargar " + url);
    }
    return res.json();
}

async function obtenerEquipos() {
    return fetchJSON(`${API_BASE}/equipos`);
}

async function obtenerTabla() {
    return fetchJSON(`${API_BASE}/tabla`);
}

async function obtenerPartidos() {
    return fetchJSON(`${API_BASE}/partidos`);
}

