let inputText = process.argv[2];
let inputWord = process.argv[3];
let wordToCompare="";
let count = 0;

for(index = 0; index < inputText.length; index++){
  if(inputText[index] != " "){
    wordToCompare += inputText[index];
  }else{
    wordToCompare = "";
  }
  if(wordToCompare == inputWord){
    count++;
  }
}

console.log(count);

