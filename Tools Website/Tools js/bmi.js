function calculateBMI(){

let w=document.getElementById("weight").value
let h=document.getElementById("height").value

let bmi=w/(h*h)

document.getElementById("result").innerText="BMI: "+bmi.toFixed(2)

}