let button = document.getElementById("getTimezone")

if(button !== null){
button.addEventListener("click",Timezone);
}

function Timezone(){
let showtime = document.getElementById("showTimezone")
showtime.innerHTML = Date()
}