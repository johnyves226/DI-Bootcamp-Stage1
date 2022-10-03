let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.indexOf('not');
let wordBad = sentence.indexOf('bad');

if(wordNot<wordBad){
    sentence =sentence.replace("not that bad", "good");
        console.log(sentence)
}else{console.log(sentence)};
