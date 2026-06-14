function generatePassword(){

let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

let pass=""

for(let i=0;i<10;i++){

pass+=chars.charAt(Math.floor(Math.random()*chars.length))

}

document.getElementById("result").innerText=pass

}