let inputString = process.argv[2];
let reverseString = "";

for(let index = inputString.length-1; index >= 0; index--){
  reverseString += inputString[index];
}

console.log(reverseString);
