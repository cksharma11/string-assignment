let inputString = process.argv[2];
let strikeChar = process.argv[3];
let strickedString = "";

for(let index =0; index < inputString.length; index++){
  if(inputString[index] != strikeChar){
    strickedString += inputString[index];
  } else{
    strickedString += "-";
  }
}

console.log(strickedString)
