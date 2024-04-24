s; /* CHALLENGE 17 - IIFE (Immediately Invoked Function Expression)

Complete IIFE that will expose following methods:
  greet() - It will take one argument and return greeting string
  changeGreeting() - It will change greeting string

Initial greeting string "Hey, that's" must be defined inside IIFE.
*/

("use strict");

var greeting = (() => {
  let myGreeting = "Hey, that's ";

  function greet(name) {
    if (!name) {
      throw new Error("Name is required");
    }
    return `${myGreeting}${name}`;
  }

  function changeGreeting(newGreeting) {
    if (typeof newGreeting !== "string") {
      throw new TypeError("Argument must be a string");
    }
    myGreeting = newGreeting;
  }

  return {
    greet,
    changeGreeting,
  };
})();

console.log(greeting.greet("Bob"));
// Hey, that's Bob

console.log(greeting.changeGreeting("Good Morning from"));
// undefined

console.log(greeting.greet("Emily"));
// Good Morning from Emily
