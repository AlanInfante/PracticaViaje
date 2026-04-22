const evento = document.querySelector("#evento");
const agrandar = document.querySelector("#agrandar");
const reducir = document.querySelector("#reducir");
const reset = document.querySelector("#reset");

agrandar.addEventListener ("click",() => {
evento.classList.remove("tamañoInicial")
evento.classList.remove("achicar")
evento.classList.add ("agrandar")
})
reducir.addEventListener ("click",() => {
evento.classList.remove("agrandar")
evento.classList.remove("tamañoInicial")
evento.classList.add("achicar")
})
reset.addEventListener ("click",()=>{
evento.classList.remove("agrandar")
evento.classList.remove("achicar")
evento.classList.add("tamañoInicial")
})



