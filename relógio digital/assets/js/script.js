const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let mnt = dateToday.getUTCMinutes()
    let sec = dateToday.getSeconds()

    if(hr < 10) hr = '0' + hr
    if(mnt < 10) mnt = '0' + mnt
    if(sec < 10) sec = '0' + sec

    horas.textContent = hr
    minutos.textContent = mnt
    segundos.textContent = sec
})