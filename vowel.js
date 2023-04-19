// Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.
// "a", "e", "i", "o", "u" are considered vowels.
// Every other letter is considered a consonant.
// Hint: Define two variables that keep track of the number of consonants and vowels.

function countConsonantsAndVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let numConsonants = 0;
    let numVowels = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (vowels.includes(char)) {
        numVowels++;
      } else if (char >= 'a' && char <= 'z') {
        numConsonants++;
      }
    }
  
    console.log(`${str} has ${numConsonants} consonants and ${numVowels} vowels`);
  }
  
  countConsonantsAndVowels('hello'); 

  // Output: "hello has 3 consonants and 2 vowels"

  countConsonantsAndVowels('ukelele'); 

  // Output: "ukelele has 3 consonants and 4 vowels"

  countConsonantsAndVowels('awesome');

  // Output: "awesome has 3 consonants and 4 vowels"

  countConsonantsAndVowels('onomonopia');

  // Output: "onomonopia has 4 consonants and 6 vowels"

  countConsonantsAndVowels('textbook'); 
  
  // Output: "textbook has 5 consonants and 3 vowels"