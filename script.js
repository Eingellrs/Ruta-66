// Actividad práctica III: cinco eventos diferentes para la página Ruta 66
document.addEventListener("DOMContentLoaded", () => {
    const encabezado = document.querySelector("header");
    const titulos = document.querySelectorAll("main h2, main h3");
    const imagenes = document.querySelectorAll("img");
    const secciones = document.querySelectorAll("main section");
    const tituloPrincipal = document.querySelector("header h1");

    // 1. Evento mouseover: resalta el encabezado al pasar el cursor.
    encabezado.addEventListener("mouseover", () => {
        encabezado.classList.add("encabezado-resaltado");
    });

    // 2. Evento mouseout: quita el resaltado al retirar el cursor.
    encabezado.addEventListener("mouseout", () => {
        encabezado.classList.remove("encabezado-resaltado");
    });

    // 3. Evento click: permite ampliar o reducir las imágenes.
    imagenes.forEach((imagen) => {
        imagen.addEventListener("click", () => {
            imagen.classList.toggle("imagen-ampliada");
        });
        imagen.style.cursor = "zoom-in";

        // Si falta un archivo de imagen, muestra un aviso legible en vez del icono roto.
        imagen.addEventListener("error", () => {
            imagen.classList.add("imagen-no-disponible");
            imagen.alt = "Imagen pendiente de agregar al proyecto";
            imagen.title = "Agrega el archivo de imagen correspondiente a esta carpeta.";
        }, { once: true });
    });

    // 4. Evento dblclick: cambia el color de los títulos al hacer doble clic.
    titulos.forEach((titulo) => {
        titulo.addEventListener("dblclick", () => {
            titulo.classList.toggle("titulo-alternativo");
        });
        titulo.title = "Haz doble clic para cambiar el color";
    });

    // 5. Evento keydown: presiona la tecla D para activar o desactivar el modo oscuro.
    document.addEventListener("keydown", (evento) => {
        if (evento.key.toLowerCase() === "d" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
            document.body.classList.toggle("modo-oscuro");
        }
    });

    // Mensaje de ayuda para que se conozcan los eventos incluidos.
    const ayuda = document.createElement("p");
    ayuda.className = "ayuda-eventos";
    ayuda.textContent = "Prueba los eventos: pasa el cursor por el encabezado, haz clic en una imagen, doble clic en un título o presiona la tecla D.";
    document.querySelector("footer").appendChild(ayuda);
});
