// With a for loop, create a JavaScript code that creates a new array in reverse order.

function reverseArray(arr) {
    const result = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
  
    return result;
  }
  
  console.log(reverseArray([1, 2, 3])); 
  
  // Output: [3, 2, 1]

  console.log(reverseArray([1, 3, 5, 7, 9, 11]));

  // Output: [11, 9, 7, 5, 3, 1]

  console.log(reverseArray([20, 50, 30, 60, 200])); 

  // Output: [200, 60, 30, 50, 20]

  console.log(reverseArray([1, -1, 2, -3, 5, -8, 13])); 
  
  // Output: [13, -8, 5, -3, 2, -1, 1]