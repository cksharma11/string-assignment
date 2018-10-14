let inputText = process.argv[2];

const countConstants = function(inputText){
  let consonantsCount = 0;
  let consonants = "bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ";
  for(let textIndex = 0; textIndex < inputText.length; textIndex++){
    for(let consonantIndex = 0; consonantIndex < consonants.length; consonantIndex++){
      if(inputText[textIndex] == consonants[consonantIndex]){
        consonantsCount++;
      }
    }
  }
  return consonantsCount;
}

console.log(countConstants(inputText));
