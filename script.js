document.addEventListener("DOMContentLoaded", () => {
    // Contenedor principal para cargar templates
    const contenedor = document.querySelector("#pantalla-templates");

    // Función para mostrar un template por su ID
    const mostrarTemplate = (templateId) => {
        contenedor.innerHTML = ""; // Limpia el contenido del contenedor

        const template = document.querySelector(`#${templateId}`);
        if (template) {
            const contenidoClonado = template.content.cloneNode(true);
            contenedor.appendChild(contenidoClonado);
        } else {
            console.error(`Template con ID "${templateId}" no encontrado.`);
        }
    };

    // Cargar el template inicial (pantalla principal)
    mostrarTemplate("pantallaPrincipal");

    // Delegación de eventos para manejar cambios de template
    document.addEventListener("click", (event) => {

        // INICIO DE SESION
        if (event.target.id === "bt-inSesion") {
            mostrarTemplate("inicioDeSesion");
        } if (event.target.id === "bt-registrarse1") {
            mostrarTemplate("registrarse");
        } if (event.target.id === "bt-recuperarC") {
            mostrarTemplate("recuperacionContaseña1");
        }
        // REGISTRARSE
        if (event.target.id === "bt-registrarse2") {
            mostrarTemplate("verificarCorreo1");
        } if (event.target.id === "bt-verificar") {
            mostrarTemplate("verificarCorreo2"); 
        } if (event.target.id === "bt-iniciar2") {
            mostrarTemplate("inicioDeSesion");
        }
        // RECUPERACION DE CONTRASEÑA
        if (event.target.id === "bt-recuperar1") {
            mostrarTemplate("recuperacionContaseña2");
        } if (event.target.id === "bt-recuperar2") {
            mostrarTemplate("recuperacionContaseña3");
        } if (event.target.id === "bt-iniciar3") {
            mostrarTemplate("inicioDeSesion");
        }
        // DESCRIPCION PRODUCTO
        if (event.target.id === "bt-productos") {
            mostrarTemplate("descripcionProducto");
        }
    });
});
