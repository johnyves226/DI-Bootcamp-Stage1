var number=0
var computerNumber=0

function playTheGame() {
    if (!confirm("voulez-vous jouer a notre formidable jeux")){
        alert("No problem, Goodbye")
    }
    else{
        number = +prompt("veuillez entrer un numbre entre 0 et 10: ")
            if (isNaN(number)){
                alert("Sorry Not a number, Goodbye")
            }
            else
            {   if(number>0 && number>10){
                alert("Sorry it’s not a good number, Goodbye")
                }
                else {

                        computerNumber =  (Math.ceil(Math.random()*10))
                        compareNumbers(number,computerNumber)
                }
            }
    }
}

function compareNumbers(userNumber,computerNumber){
    if (userNumber==computerNumber){
        alert("WINNER")
        return true
    }

    if (userNumber>computerNumber){
        alert("Your number is bigger then the computer’s, guess again")
        let number = +prompt("veuillez entrer  de nouveau un numbre entre 0 et 10: ")
        if (isNaN(number)){
            alert("Sorry Not a number, Goodbye")
        }
        else {
            if (number == computerNumber) {
                alert("WINNER")
                return true
            }
            if (number < computerNumber) {
                alert("Your number is smaller then the computer’s, guess again")
                number = +prompt("veuillez entrer de nouveau numbre entre 0 et 10: ")
                if (isNaN(number)) {
                    alert("Sorry Not a number, Goodbye")
                }else{
                    if (number == computerNumber) {
                        alert("WINNER")
                        return true
                    }
                    else{
                        alert("out of chances")
                    }
                }

            }
            if (userNumber > computerNumber) {
                alert("Your number is bigger then the computer’s, guess again")
                let number = +prompt("veuillez entrer  de nouveau un numbre entre 0 et 10: ")
                if (isNaN(number)){
                    alert("Sorry Not a number, Goodbye")
                }
                else{
                    if (number == computerNumber) {
                        alert("WINNER")
                        return true
                    }
                    else{
                        alert("out of chances")
                    }
                }
            }
            }
        }

    if (userNumber<computerNumber){
        alert("Your number is smaller then the computer’s, guess again")
        number = +prompt("veuillez entrer de nouveau numbre entre 0 et 10: ")
        if (isNaN(number)){
            alert("Sorry Not a number, Goodbye")
        }else{

            if (number == computerNumber) {
                alert("WINNER")
                return true
            }
            if (number < computerNumber) {
                alert("Your number is smaller then the computer’s, guess again")
                number = +prompt("veuillez entrer de nouveau numbre entre 0 et 10: ")
                if (isNaN(number)) {
                    alert("Sorry Not a number, Goodbye")
                }else{
                    if (number == computerNumber) {
                        alert("WINNER")
                        return true
                    }
                    else{
                        alert("out of chances")
                    }
                }

            }
            if (userNumber > computerNumber) {
                alert("Your number is bigger then the computer’s, guess again")
                let number = +prompt("veuillez entrer  de nouveau un numbre entre 0 et 10: ")
                if (isNaN(number)){
                    alert("Sorry Not a number, Goodbye")
                }
                else{
                    if (number == computerNumber) {
                        alert("WINNER")
                        return true
                    }
                    else{
                        alert("out of chances")
                    }
                }
            }

        }
    }

}


//--------------------bonus-----------------------------------------//

/*
function playTheGame() {
    if (!confirm("voulez-vous jouer a notre formidable jeux")) {
        alert("No problem, Goodbye")
    }
    else {
        do{
            number = +prompt("veuillez entrer un numbre entre 0 et 10: ")
        }while (isNaN(number))
        if (number > 0 && number > 10) {
            alert("Sorry it’s not a good number, Goodbye")
        }
        else {
                computerNumber = (Math.ceil(Math.random() * 10))
                compareNumbers(number, computerNumber)
            }
        }
    }*/
