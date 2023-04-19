// Create a JavaScript code that modifies a copy of an array of numbers and returns a new array with only the odd numbers from the original array. 
// If there is only one odd number in the array, return an array with that single value.

function getOddNumbers(arr) {
    const oddArr = arr.filter(num => num % 2 !== 0);
    return oddArr.length === 1 ? oddArr : oddArr.length ? oddArr : [];
  }

  const arr1 = [2, 4, 6, 8, 11, 20, 15, 22];
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr3 = [70, 42, 55, 81, 21, 91, 34];
  const arr4 = [2, 4, 6, 8, 10, 11, 12];
  
  console.log(getOddNumbers(arr1));

  // Output: [ 11, 15 ]

  console.log(getOddNumbers(arr2)); 
  
  // Output: [ 1, 3, 5, 7, 9 ]

  console.log(getOddNumbers(arr3));

  // Output: [ 55, 81, 21, 91 ]

  console.log(getOddNumbers(arr4)); 
  
  // Output: [ 11 ]