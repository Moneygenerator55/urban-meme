function countWords(){

let text=document.getElementById("text").value

let words=text.trim().split(/\s+/).length

document.getElementById("result").innerText="Words: "+words

}