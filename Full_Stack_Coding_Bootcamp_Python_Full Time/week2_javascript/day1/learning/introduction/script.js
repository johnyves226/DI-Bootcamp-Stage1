let adresseNuméro=66;
let rue_dadresse="kwame nkruma";
let pays="burkina faso";

let globalAddress="i live in "+rue_dadresse+" "+ adresseNuméro + ",in "+pays;

console.log(globalAddress)


let annee=1998
aaaa=2022
age=aaaa-annee

console.log("je serais " + age+ " en " + aaaa )


let pets= ['cat','dog','fish','rabbit','cow'];

console.log(pets[1]);

pets.push('horse')
pets.splice(3,1)
console.log(pets)
console.log(pets.length)

let ages = prompt('How old are you?', 20);
alert(`You are ${ages} years old!`);

let isBoss = confirm("Are you the boss?");
alert(isBoss);