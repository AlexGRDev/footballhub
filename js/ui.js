function animarContador(elemento, valorFinal, duracion = 800) {
    let inicio = null;
    const valorInicial = 0;

    function paso(timestamp) {
        if (!inicio) inicio = timestamp;
        const progreso = Math.min((timestamp - inicio) / duracion, 1);
        const valor = Math.floor(valorInicial + (valorFinal - valorInicial) * progreso);
        elemento.textContent = valor;
        if (progreso < 1) {
            requestAnimationFrame(paso);
        }
    }

    requestAnimationFrame(paso);
}

function renderizarEquipos(equipos) {
    const contenedor = document.getElementById("listaEquipos");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    if (!equipos.length) {
        contenedor.textContent = "No se han encontrado equipos.";
        return;
    }

    equipos.forEach(eq => {
        const div = document.createElement("div");
        div.className = "card-equipo fade-in";
        div.innerHTML = `
            <h3>${eq.nombre}</h3>
            <p><strong>Ciudad:</strong> ${eq.ciudad}</p>
            <p><strong>Estadio:</strong> ${eq.estadio}</p>
        `;
        contenedor.appendChild(div);
    });
}

function renderizarTabla(tabla) {
    const tablaEl = document.getElementById("tablaClasificacion");
    if (!tablaEl) return;
    tablaEl.innerHTML = `
        <thead>
            <tr>
                <th>Pos</th>
                <th>Equipo</th>
                <th>Puntos</th>
                <th>Goles</th>
            </tr>
        </thead>
        <tbody>
            ${tabla.map((t, i) => `
                <tr class="fade-in">
                    <td>${i + 1}</td>
                    <td>${t.equipo}</td>
                    <td>${t.puntos}</td>
                    <td>${t.goles}</td>
                </tr>
            `).join("")}
        </tbody>
    `;
}

function renderizarPartidos(partidos) {
    const contenedor = document.getElementById("listaPartidos");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    if (!partidos.length) {
        contenedor.textContent = "No hay partidos para los filtros seleccionados.";
        return;
    }

    partidos.forEach(p => {
        const div = document.createElement("div");
        div.className = "card-partido fade-in";
        div.innerHTML = `
            <p><strong>${p.local}</strong> vs <strong>${p.visitante}</strong></p>
            <p>${p.fecha} · Jornada ${p.jornada}</p>
            <p>Estadio: ${p.estadio}</p>
        `;
        contenedor.appendChild(div);
    });
}

console.log("UI desde filters");
