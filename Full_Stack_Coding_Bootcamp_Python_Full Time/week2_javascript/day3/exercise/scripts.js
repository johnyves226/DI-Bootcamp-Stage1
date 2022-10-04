
// exercice 2

let names= ["john", "sarah", 23, "Rudolf",34]

for (element of names){
    if (typeof(element) == "string"){
        if(element.charAt(0) == element.charAt(0).toLowerCase()) {
            word = element.charAt(0).toUpperCase()+ element.slice(1)
            console.log(word)
        }
    }
}