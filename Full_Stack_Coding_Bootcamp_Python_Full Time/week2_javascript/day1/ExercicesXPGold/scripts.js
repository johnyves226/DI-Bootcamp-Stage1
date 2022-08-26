//------------------Exercise1------

let sentence = ["my","favorite","color","is","blue"];

console.log(sentence.join(" "))
//------------------Exercise2------------

let str1 = "mix";
let str2 = "pod";

let text= str1.replace(str1.substring(0,2),str2.substring(0,2))+" "+str2.replace(str2.substring(0,2),str1.substring(0,2));

console.log(text)

let concat= str1+" "+str2;
console.log(concat);

//---------------Exercise--------------
let num1= parseInt(prompt('veuillez saisir un premier nombre?'));
let num2= parseInt(prompt('veuillez saisir le deuxieme nombre?'));

console.log("--------ADDITION--------");
console.log("la somme de "+num1+" et "+num2+" est egale a "+(num1+num2));

console.log("--------SOUSTRACTION--------");
console.log("la soustraction de "+num1+" et "+num2+" est egale a "+(num1-num2));

console.log("--------MULTIPLICATION--------");
console.log("la multiplication de "+num1+" et "+num2+" est egale a "+(num1*num2));

console.log("--------DIVISION--------");
console.log("la division de "+num1+" et "+num2+" est egale a "+(num1/num2));






