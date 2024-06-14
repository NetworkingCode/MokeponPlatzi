function iniciarJuego() {

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

}


function seleccionarMascotaJugador() {
    
    let inputHipodoge = document.getElementById('hipodoge').checked
    let inputCapipepo = document.getElementById('capipepo').checked
    let inputRatigueya = document.getElementById('ratigueya').checked
    
    if (inputHipodoge) {
        alert('Seleccionaste a Hipodoge')
        
    } else if (inputCapipepo) {
        alert('Seleccionaste a Capipepo')
        
    } else if (inputRatigueya) {
        alert('Seleccionaste a Ratigueya')

    } else alert('Debes seleccionar una mascota')   
}


window.addEventListener('load', iniciarJuego)