// exercise1
/*

function with no parameters

Create a function called infoAboutMe() that takes no parameter.
    The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
Call the function.*/


function infoAboutMe() {
    console.log("my name is john, i'm 25 year old and i like coding")
}

infoAboutMe()

/*Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
    The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
Call the function twice with the following arguments*/

function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("You name is "+personName +", you are "+ personAge+" years old, your favorite color is "+personFavoriteColor)
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


//exercice 2


/*
John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

    Create a function named calculateTip() that takes no parameter.

    Inside the function, ask John for the amount of the bill.

    Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.

Console.log the tip amount and the final bill (bill + tip).

    Call the calculateTip() function.*/

function calculateTip(){
     var bill = parseInt(prompt("Please john, put the amount of the bill."))
    var tip = 0
    if (bill<50){
        console.log("the tip amount is "+ bill +" and the final bill (bill + tip) is "+(bill+(bill*0.2)))

    }

    if (bill>=50 && bill<=200){
        console.log("the tip amount is "+ bill +" and the final bill (bill + tip) is "+(bill+(bill*0.15)))

    }

    if (bill>200){
        console.log("the tip amount is "+bill +" and the final bill (bill + tip) is "+(bill+(bill*0.10)))

    }
}

calculateTip()



//exercice3

/*

Create a function call isDivisible() that takes no parameter.

    In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.
*/

function isDivisible() {
    var sum=0
    for (let i =0;i<500;i++){
        if(i%23 == 0){
            console.log(i);
            sum+=i;
        }
    }
    console.log("sum: "+sum)
}

isDivisible()


//Bonus: Add a parameter divisor to the function.

function isDivisibleBy(divisor) {
    var sum=0
    for (let i =0;i<500;i++){
        if(i%divisor == 0){
            console.log(i);
            sum+=i;
        }
    }
    console.log("sum: "+sum)
}

isDivisibleBy(3)
isDivisibleBy(45)


//exercice4
/*
Add the stock and prices objects to your js file.

    Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

    Create a function called myBill() that takes no parameters.

    The function should return the total price of your shoppingList. In order to do this you must follow these rules:
    The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.

    Call the myBill() function.

Bonus: If the item is in stock, decrease the item’s stock by 1*/

let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ["banana", "orange", "apple"]

var price=0

function myBill(){
    for(element of shoppingList){
        if(element in stock){
            if(stock[element] > 0){
                price+=prices[element]
                stock[element]+=-1
            }
        }
    }

    console.log("the total price is :" + price)
    console.log(stock)

}


myBill()


///exercice 5

function changeEnough(itemPrice, amountOfChange){
    var somme=0
    somme += (amountOfChange[0]*0.25)
    somme += (amountOfChange[1]*0.10)
    somme += (amountOfChange[2]*0.5)
    somme += (amountOfChange[3]*0.01)
    if (somme>=itemPrice){
        return true
    }
    else {
        return false
    }

}

console.log( changeEnough(4.25, [25, 20, 5, 0]))

console.log( changeEnough(14.11, [2,100,0,0]))

console.log( changeEnough(0.75, [0,0,20,5]))


///exercise 6


function  hotelCost(){
    var number =0
    var hotelprice = 0
    do{
        number = prompt("Veuillez entrer le nombre de nuit a passer a l'hotel")

    }while (parseInt(number) <1 && typeof (number) != "integer" && typeof (number) == "undefined" && typeof (number) == "NaN")

    return   hotelprice = parseInt(number) * 140
}

function planeRideCost(){
    var destination =""
    var  planePrice = 0
    do{
        destination = prompt("Veuillez entrer la destination")

    }while (typeof (destination) != "string" && typeof (destination) == "undefined")

    if(destination == "London"){
            planePrice=183
    }else if(destination == "Paris"){
        planePrice= 220
    }else {
        planePrice= 300
    }
    return planePrice
}


function rentalCarCost(){
    var numberd =0
    var  rentalCarPrice = 0
    do{
        numberd = prompt("Veuillez entrer le nombre de jour de location de voiture")

    }while (parseInt(numberd) <1 && typeof (numberd) != "integer" && typeof (numberd) == "undefined" && typeof (numberd) == "NaN")

    if(numberd>10){
        rentalCarPrice = (numberd*40) - (numberd*40*0.05)
        return rentalCarPrice
    }else {
        rentalCarPrice = numberd*40
        return rentalCarPrice
    }
}


function totalVacationCost(){
    let x=rentalCarCost()
    let  y=hotelCost()
    let z=planeRideCost()

    console.log("The car cost: $"+x+", the hotel cost: $"+y+", the plane tickets cost: $"+z)
}

///bonus

function  hotelCost(number ){
    var hotelprice = 0
    return   hotelprice = parseInt(number) * 140
}

function planeRideCost(destination){
    if(destination == "London"){
        planePrice=183
    }else if(destination == "Paris"){
        planePrice= 220
    }else {
        planePrice= 300
    }
    return planePrice
}


function rentalCarCost(numberd){
    if(numberd>10){
        rentalCarPrice = (numberd*40) - (numberd*40*0.05)
        return rentalCarPrice
    }else {
        rentalCarPrice = numberd*40
        return rentalCarPrice
    }
}

function totalVacationCost(){
    let x = 0, y = 0, z = "";
    do{
        x = prompt("Veuillez entrer le nombre de jour de la location du vehicule")

    }while (parseInt(x) <1 && typeof (x) != "integer" && typeof (x) == "undefined" && typeof (x) == "NaN")

    do{
        y = prompt("Veuillez entrer le nombre de nuit a passer a l'hotel")

    }while (parseInt(y) <1 && typeof (y) != "integer" && typeof (y) == "undefined" && typeof (x) == "NaN")

    do{
        z = prompt("Veuillez entrer la destination")

    }while (typeof (z) != "string" && typeof (z) == "undefined")


    console.log("The car cost: $"+rentalCarCost(x)+", the hotel cost: $"+hotelCost(y)+", the plane tickets cost: $"+planeRideCost(z))
}

totalVacationCost()