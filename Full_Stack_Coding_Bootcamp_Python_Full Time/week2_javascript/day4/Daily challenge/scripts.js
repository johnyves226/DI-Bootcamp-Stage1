let text = prompt("veuillez saisir un text de plusieurs mots")
const myArray = text.split(" ");
let long=0
for (elment of myArray){
    if (elment.length>long){
        long=elment.length
    }
}

console.log("*".repeat(long))
for (element of myArray){
    console.log("*"+element+"*")
}
console.log("*".repeat(long))