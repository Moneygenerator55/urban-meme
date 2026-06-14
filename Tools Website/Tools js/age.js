function calculateAge(){

let dob=document.getElementById("dob").value

let dobDate=new Date(dob)

let today=new Date()

let age=today.getFullYear()-dobDate.getFullYear()

let m=today.getMonth()-dobDate.getMonth()

if(m<0 || (m===0 && today.getDate()<dobDate.getDate())){

age--

}

document.getElementById("result").innerText="Your Age is "+age+" years"

}