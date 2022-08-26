//----------------------exercise1--------------------

let favoritFood="potetoes";
let favoriteMeal="lunch";


console.log("I eat "+favoritFood+" at every "+favoriteMeal);
//------------------------------exercixe2---------------------------------------------------------

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength=myWatchedSeries.length;

let myWatchedSeriesSentence= "originally centered on five characters living in Pasadena, California: Leonard Hofstadter (Johnny Galecki) and Sheldon Cooper (Jim Parsons), both physicists at Caltech, who share an apartment; Penny (Kaley Cuoco), a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's similarly geeky and socially awkward friends and co-workers, aerospace engineer Howard Wolowitz (Simon Helberg) and astrophysicist Raj Koothrappali (Kunal Nayyar)";

console.log(myWatchedSeries)



console.log("I watched '" + myWatchedSeries[2]+ "' serie two time and this serie"+ myWatchedSeriesSentence);



myWatchedSeries.splice(2,1,"friends");

myWatchedSeries.push("prison break");

myWatchedSeries.unshift("4400");

myWatchedSeries.splice(1,1);


console.log(myWatchedSeries[1][2])

console.log(myWatchedSeries);

document.getElementById("test").innerText = myWatchedSeries.join(" ,");

//---------------------------------------exercise3-------------------------------------------------------------

let weather=37;

let fahrenheit;

fahrenheit=((weather*9)/5)+32


console.log(weather+" °c is "+fahrenheit+" °F")

//------------------------------------------exercise4-------------------------------------------------------
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:It will output 55, because 34 and 21 are numbers
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction::It will output 23, because 2 and 21 are numbers
// Actual:23


//c is undefined

console.log(3 + 4 + '5');
//Prediction::It will output "75", because 3 and 4 are numbers equal to 7 and 5 is string


//--------------------------------------------exercise5------------------------------

typeof(15)
// Prediction:number
// Actual:number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:Not a number
// Actual:number

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:boolean

typeof(1 != 2)
// Prediction: True
// Actual:boolean

"hamburger" + "s"
// Prediction:string
// Actual:hamburgers

"hamburgers" - "s"
// Prediction: string
// Actual: hamburger

"1" + "3"
// Prediction: string
// Actual:"31"

"1" - "3"
// Prediction:
// Actual:

"johnny" + 5
// Prediction:String
// Actual: johnny5

"johnny" - 5
// Prediction:undefined
// Actual:NaN

99 * "hello"
// Prediction: undefined
// Actual:NaN

1 != 1
// Prediction:False
// Actual:boolean

1 == "1"
// Prediction: True
// Actual: boolean

1 === "1"
// Prediction:False
// Actual:boolean

//---------------------------------------Exercise6--------------------------

5 + "34"
// Prediction: String
// Actual:39

5 - "4"
// Prediction: Number
// Actual: 1

10 % 5
// Prediction: number
// Actual:0

5 % 10
// Prediction: number
// Actual: 5

"Java" + "Script"
// Prediction: String
// Actual:JavaScript

" " + " "
// Prediction: String
// Actual:"  "

" " + 0
// Prediction: String
// Actual:" 0"

true + true
// Prediction:Boolean
// Actual: 2

true + false
// Prediction:Boolean
// Actual: 1

false + true
// Prediction:boolean
// Actual:1

false - true
// Prediction:boolean
// Actual: -1

!true
// Prediction:Boolean
// Actual:False

3 - 4
// Prediction: number
// Actual: -1

"Bob" - "bill"
// Prediction:undefined
// Actual: NaN
