let inputText = process.argv[2];
let subString = process.argv[3];
let stringToCompare;
let subStringCount = 0;

for(let textIndex = 0; textIndex <= inputText.length - subString.length; textIndex++){
  stringToCompare = "";

  for(let subIndex = textIndex; subIndex < textIndex + subString.length; subIndex++){
    stringToCompare += inputText[subIndex];
  }

  subStringCount += (stringToCompare == subString);
}

console.log(subStringCount);
