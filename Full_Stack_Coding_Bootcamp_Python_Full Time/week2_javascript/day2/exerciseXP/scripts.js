//exercice1
/*Create 2 variables, x and y. Each of them should have a different numeric value.
    Write an if/else statement that checks which number is bigger.*/
let x = 6;
let y = 3;

if (x > y ){
    console.log(x +" is bigger than "+ y)
}

else if ( x < y ){
    console.log(y+" is bigger than "+ x)
}
else {
    console.log(x+" equal to "+y)
}


//exercise
/*
Create a variable called newDog where it’s value is “Chihuahua”.
Check and display how many letters are in newDog.
Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
Check if the variable newDog is equal to “Chihuahua”
if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
else, console.log ‘I dont care, I prefer cats’*/

let newDog = "Chihuahua"

console.log(newDog.length)

console.log(newDog.toUpperCase())

console.log(newDog.toLowerCase())


if (newDog == "Chihuahua"){
    console.log("I love Chihuahuas, it’s my favorite dog breed")
}
else {
    console.log("‘I dont care, I prefer cats")
}


//exercice3

/*Prompt the user for a number and save it to a variable.
    Check whether the variable is even or odd.
    If it is even, display: “x is an even number”. Where x is the actual number the user chose.
    If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.*/


let number = prompt("veuillez entrer un nombre")


if ((number % 2) == 0){
    console.log(number+ " est paire")
}
else {
    console.log(number+ " est impaire")
}


//exercise4

/*Below is an array of users that are online in a group chat.

    let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
    If there is no users (the users array is empty), console.log “no one is online”.
If there is 1 user, console.log “<name_user> is online”.
    If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
        If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
        For example, if there are 5 users, it should display:
        name_user1, name_user2 and 3 more are online*/


let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];


if (users.length ==0 ){
    console.log("no one is online")
}

if (users.length ==1 ){
    console.log(users[0])
}

if (users.length == 2 ){
    console.log(users[0]+" "+users[1])
}
if (users.length > 2 ){
    console.log(users[0]+", "+users[1] +" and "+ (users.length-2) + " more are online")
}

//exercise5





