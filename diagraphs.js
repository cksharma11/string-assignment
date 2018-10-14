let inputText = process.argv[2];

const findDiagraphs = function(inputText){
  let diagraphs="";
  let delimeter = "";

  for(let textIndex =0; textIndex < inputText.length-1; textIndex++){
    if(inputText[textIndex] == inputText[textIndex+1]){
      diagraphs += delimeter + inputText[textIndex] + inputText[textIndex+1]; 
      delimeter = ",";
    }
  }
  return diagraphs;
}

console.log(findDiagraphs(inputText));
