function iniciarJuego() {

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

}


function seleccionarMascotaJugador() {
    
    let inputHipodoge = document.getElementById('hipodoge').checked
    let inputCapipepo = document.getElementById('capipepo').checked
    let inputRatigueya = document.getElementById('ratigueya').checked

    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge) {
        // alert('Seleccionaste a Hipodoge')
        spanMascotaJugador.innerHTML = 'Hipodoge'
        
    } else if (inputCapipepo) {
        // alert('Seleccionaste a Capipepo')
        spanMascotaJugador.innerHTML = 'Capipepo'
        
    } else if (inputRatigueya) {
        // alert('Seleccionaste a Ratigueya')
        spanMascotaJugador.innerHTML = 'Ratigueya'

    } else alert('Debes seleccionar una mascota')   
}


window.addEventListener('load', iniciarJuego)