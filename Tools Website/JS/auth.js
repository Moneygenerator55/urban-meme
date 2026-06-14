function login(){

let u=document.getElementById("user").value
let p=document.getElementById("pass").value

if(u=="admin" && p=="1234"){

localStorage.setItem("login","true")
window.location="index.html"

}

else{

alert("Wrong username or password")

}

}

function checkLogin(){

if(localStorage.getItem("login")!="true"){

window.location="login.html"

}

}
