function generateQR(){

let text=document.getElementById("text").value

document.getElementById("qr").src=
"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+text

}