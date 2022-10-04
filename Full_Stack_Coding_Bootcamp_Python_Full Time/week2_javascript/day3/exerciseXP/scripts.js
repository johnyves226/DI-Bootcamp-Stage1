//exercice1

/*Write code to remove “Greg” from the people array.

    Write code to replace “James” to “Jason”.

Write code to add your name to the end of the people array.

    Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

    Write code to make a copy of the people array using the slice method.
    The copy should NOT include “Mary” or your name.
    Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method

Write code that gives the index of “Foo”. Why does it return -1 ?

    Create a variable called last which value is the last element of the array.
    Hint: What is the relationship between the index of the last element in the array and the length of the array?*/


let people = ["Greg", "Mary", "Devon", "James"];
//1
people.splice(people.indexOf("Greg"),1)

console.log(people)
//2
people.splice(people.indexOf("James"),1,"Jason")

console.log(people)
//3
people.push("John")

console.log(people)


//4
console.log(people.indexOf("Mary"))

//5

let peoplenew=people.slice(1,-1)


console.log(peoplenew)
//6

console.log(people.indexOf("Foo"))

// the result is -1 because this string isn't present in people

//7
let last = people.slice(-1)

console.log(last)

//the last element index equal to  array length - 1

//Part II - Loops

/*
Using a loop, iterate through the people array and console.log each person.

    Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
Hint: take a look at the break statement in the lesson.*/

//1

for (element of people){
    console.log(element)
}

//2

for (element of people){
    console.log(element)
    if(element == "Jason"){
        break
    }
}


//exercice2

/*
Create an array called colors where the value is a list of your five favorite colors.
    Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
    Hint : create an array of suffixes to do the Bonus*/


let colors = ["black","blue","red","green","yellow"]
let suffixes = ["1st", "2nd","3rd","4th","5th"]
let n=0

for (element of colors){
        console.log("My "+ suffixes[colors.indexOf(element)] +" choice is " +element )
}

//exercise3


/*rompt the user for a number.
    Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?*/

let number =  prompt("veuillez saisir un nombre")

console.log(typeof(number))

 while (parseInt(number)<=10){
     number = parseInt(prompt("veuillez saisir un nombre superieur a 10"))
 }

 //exercise4

/*Copy and paste the above object to your Javascript file.

    Console.log the number of floors in the building.

    Console.log how many apartments are on the floors 1 and 3.

Console.log the name of the second tenant and the number of rooms he has in his apartment.

    Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.*/


let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}


console.log("the number of floors in the building are: "+building.numberOfFloors)


console.log("the number of apartments on the floors 1: "+building.numberOfAptByFloor.firstFloor)

console.log("the number of apartments on the floors 3: "+building.numberOfAptByFloor.thirdFloor)


console.log("the name of the second tenant: "+building.nameOfTenants[1])

console.log("the number of rooms "+ building.nameOfTenants[1] + " has : "+building.numberOfRoomsAndRent.dan[0])


if ((building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1])>building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1]+=1200
}

console.log("the rent of "+ building.nameOfTenants[1] + " rooms has : "+building.numberOfRoomsAndRent.dan[1])



//exercise 5

/*Create an object called family with a few key value pairs.
    Using a for in loop, console.log the keys of the object.
    Using a for in loop, console.log the values of the object.*/




let family = {
    fathername:"Donald",
    mothername:"eve",
    childrennumber:4,
    children:{
        firstChildName:"mamadou",
        secondChildName : "josue",
        thirdChildName : "christian",
        fourtChildName : "severine",
    }
}

for (element in family){
    console.log(element)
}
console.log("/////")
for (element in family){
    console.log(family[element])
}



//exercice 6

//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
var text = "";
for (element in details){
    text = text + " " + element + " " + details[element]
}
console.log(text)



//exercise 7

/*
A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
    Hint: a string is an array of letters
Console.log the name of their secret society. The output should be “ABJKPS”*/

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
var socity=""
for (element of names){
    socity+=element[0]
}

console.log("their secret society name is: "+socity)