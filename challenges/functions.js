// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
*/
//   * Create a higher-order function named consume that can take 3 parameters.
//   * The first two parameters can accept any argument
//   * The last parameter accepts a callback 
//   * In the body of the function return the callback with the two parameters that you created
// */

function consume(arr, randomThing, cb) {
  return cb(arr,randomThing);
}



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = function(arr, randomThing) {
  console.log(arr + randomThing);
}


const multiply = function(arr, randomThing) {
  console.log(arr * randomThing);
}

const greeting = function(arr, randomThing){
  console.log (`Hello ${arr} ${randomThing}! , nice to meet you!`)
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!





// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: A nested function is considered a closure. A nested function inherits an arguement variables 
//contain tin the function that accessed fron statements in the outer function.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();