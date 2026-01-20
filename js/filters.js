function inicializarFiltrosEquipos(equipos) {
    const selectCiudad = document.getElementById("filtroCiudad");
    if (!selectCiudad) return;

    const ciudades = [...new Set(equipos.map(e => e.ciudad))].sort();
    ciudades.forEach(ciudad => {
        const opt = document.createElement("option");
        opt.value = ciudad;
        opt.textContent = ciudad;
        selectCiudad.appendChild(opt);
    });
}

function filtrarEquipos(equipos, texto, ciudad) {
    texto = texto.toLowerCase();
    return equipos.filter(e => {
        const coincideTexto =
            e.nombre.toLowerCase().includes(texto) ||
            e.ciudad.toLowerCase().includes(texto);
        const coincideCiudad = !ciudad || e.ciudad === ciudad;
        return coincideTexto && coincideCiudad;
    });
}

function ordenarTabla(tabla, criterio) {
    const copia = [...tabla];
    if (criterio === "puntos") {
        copia.sort((a, b) => b.puntos - a.puntos);
    } else if (criterio === "goles") {
        copia.sort((a, b) => b.goles - a.goles);
    }
    return copia;
}

function inicializarFiltrosPartidos(partidos) {
    const selectEquipo = document.getElementById("filtroEquipo");
    if (!selectEquipo) return;

    const equipos = [...new Set(partidos.flatMap(p => [p.local, p.visitante]))].sort();
    equipos.forEach(eq => {
        const opt = document.createElement("option");
        opt.value = eq;
        opt.textContent = eq;
        selectEquipo.appendChild(opt);
    });
}

function filtrarPartidos(partidos, fecha, equipo) {
    return partidos.filter(p => {
        const coincideFecha = !fecha || p.fecha === fecha;
        const coincideEquipo = !equipo || p.local === equipo || p.visitante === equipo;
        return coincideFecha && coincideEquipo;
    });
}

