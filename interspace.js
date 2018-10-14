let inputString = process.argv[2];

const doInterspace = function(inputString){
  let interspaceString = "";
  let delimiter = "";

  for(let index = 0; index < inputString.length; index++){
      interspaceString += delimiter + inputString[index];
      delimiter = ",";
  }
  return interspaceString;
}

console.log(doInterspace(inputString));
