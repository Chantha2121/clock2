let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(()=>{
    let currentTime = new Date()

hour.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours()
minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes()
seconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds()
},1000)

hour.innerHTML = currentTime.getHours()
minutes.innerHTML = currentTime.getMinutes()
seconds.innerHTML = currentTime.getSeconds()