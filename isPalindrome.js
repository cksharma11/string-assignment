let inputString = process.argv[2];

const isPalindrome = function(inputString){
  let palindrome = false;
  for(let index = 0; index < inputString.length; index++){
    palindrome = (inputString[index] == inputString[inputString.length - index -1]);
  }
  return palindrome;
}

console.log(isPalindrome(inputString));
