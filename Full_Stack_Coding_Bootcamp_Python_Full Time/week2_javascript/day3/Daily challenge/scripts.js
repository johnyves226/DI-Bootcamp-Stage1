/*write a JavaScript program that recreates the pattern below.
    Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
Do this Daily Challenge by youself, without looking at the answers on the internet.*/


for (let i=0; i <= 6; i++){
    console.log(" * ".repeat(i))
}
//methode2
for(let i=0; i < 1; i++){
    for (let j=0; j <= 6; j++){
        console.log(" * ".repeat(j))
    }
}

