let inputText = process.argv[2];

const countVowel = function(inputText){
  let vowelCount = 0;
  let vowels = "AaEeIiOoUu";
  for(let textIndex = 0; textIndex < inputText.length; textIndex++){
    for(vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
      if(inputText[textIndex] == vowels[vowelsIndex]){
        vowelCount++;
      }
    }
  }
  return vowelCount;
}

console.log(countVowel(inputText));
