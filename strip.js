let inputString = process.argv[2];
let strippedString = "";

for(let index = 0; index < inputString.length; index++){
  if(inputString[index] != " "){
    strippedString += inputString[index];
  }
}

console.log(strippedString);
