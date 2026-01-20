document.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("formContacto");
    if (form) {
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");
        const mensajeError = document.getElementById("mensajeError");
        const mensajeOk = document.getElementById("mensajeOk");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            mensajeError.textContent = "";
            mensajeOk.textContent = "";

            if (!nombre.value.trim()) {
                mensajeError.textContent = "El nombre es obligatorio.";
                return;
            }

            if (!email.value.includes("@") || !email.value.includes(".")) {
                mensajeError.textContent = "El email no es válido.";
                return;
            }

            if (mensaje.value.trim().length < 10) {
                mensajeError.textContent = "El mensaje debe tener al menos 10 caracteres.";
                return;
            }

            mensajeOk.textContent = "Formulario enviado correctamente (simulado).";
            form.reset();
        });
        return;
    }

    const btnExplorar = document.getElementById("btnExplorar");
    const statEquipos = document.getElementById("statEquipos");
    const statPartidos = document.getElementById("statPartidos");
    const statJornadas = document.getElementById("statJornadas");

    if (btnExplorar) {
        btnExplorar.addEventListener("click", () => {
            window.location.href = "pages/equipos.html";
        });
    }

    if (statEquipos && statPartidos && statJornadas) {
        try {
            const [equipos, partidos] = await Promise.all([
                obtenerEquipos(),
                obtenerPartidos()
            ]);

            const jornadas = new Set(partidos.map(p => p.jornada));

            animarContador(statEquipos, equipos.length);
            animarContador(statPartidos, partidos.length);
            animarContador(statJornadas, jornadas.size);
        } catch (e) {
            statEquipos.textContent = "-";
            statPartidos.textContent = "-";
            statJornadas.textContent = "-";
        }
    }
});

