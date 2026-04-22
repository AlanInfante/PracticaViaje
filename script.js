/*const contador = document.querySelector("#contar");
let contadorClicks = 0;

contador.addEventListener("click", () => {
    contadorClicks++;
    console.log(`Has hecho clic ${contadorClicks} veces`);
    document.querySelector("#numero").textContent = contadorClicks;
});*/
const formulario = document.querySelector("#Viaje");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const mensaje = `Hola ${nombre}, ${apellido} queres ir conmigo a BRASIL?`;
    document.querySelector("#mensaje").textContent = mensaje;
    document.querySelector("#imagen").style.display = "block";

});