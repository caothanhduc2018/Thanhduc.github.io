function Cong(){
    let access = document.getElementById("access");
    let Clock = document.getElementById("Clock");
    let rocket = document.getElementById("rocket");
    rocket.value = parseFloat(access.value) + parseFloat(Clock.value);  
}
function Tru(){
    let access = document.getElementById("access");
    let Clock = document.getElementById("Clock");
    let rocket = document.getElementById("rocket");
    rocket.value = parseFloat(access.value) - parseFloat(Clock.value);  
}
function Nhan(){
    let access = document.getElementById("access");
    let Clock = document.getElementById("Clock");
    let rocket = document.getElementById("rocket");
    rocket.value = parseFloat(access.value) * parseFloat(Clock.value);  
}
function Chia(){
    let access = document.getElementById("access");
    let Clock = document.getElementById("Clock");
    let rocket = document.getElementById("rocket");
    rocket.value = parseFloat(access.value) / parseFloat(Clock.value);  
}
