/*********************************************************
LAB 2: SORTING AND CAMPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs. X

 TODO: Next, create an instance of Blob named blob. X

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington. X
*/

// Constructor for Blob
function Blob() {
  this.identity = "Monster";
}

// Instance of Blob called blob
var blob = new Blob();

// Loop to find the amount of time needed to eat
// entire population
var rate = 1;
var consumed = 0;
var time = 0;

do {

  time = time + (1 / rate);
  consumed += 1;
  rate += 1;
}
while (consumed < 1000);

var hour = (Math.floor(time * 100) / 100); // Keeps only two decimal places

var hoursSpentInDowington = hour; // TODO: assign me the value of the
                           // above calculation X

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
// TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype. XX

  var consumed = 0;
  var time = 0;

  if (population > 0) {

    while (consumed < population) {

      time = time + (1 / peoplePerHour);
      consumed += 1;
      peoplePerHour += 1;

    }
  }

 return (Math.floor(time * 100) / 100);
}

// Add hoursToOoze to the prototype
Blob.prototype.hoursToOoze = hoursToOoze;

// Assertions
assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

// My assertions
assert(blob.hoursToOoze(2, 1) === 1.5, "Should be 1.5 hours.");
assert(blob.hoursToOoze(3, 1) === 1.83, "Should occur at 1 hour and 50 minutes.");
assert(blob.hoursToOoze(6, 1) === 2.44, "Should occur arround 2 hours and 26 minutes.");

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello. X

function SentientBeing (planet, language) {
   this.homePlanet = planet;
   this.nativeLanguage = language;
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor X
}

// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating X

    console.log(hello[this.nativeLanguage]);
    return hello[sb.nativeLanguage];
    //TODO: put this on the SentientBeing prototype X
  }

// Adding to the SentientBeing prototype
SentientBeing.prototype.sayHello = sayHello;

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan). XXX

// Subclass means it has to inherit from
// SentientBeing
function Human() {
  this.being = "Human";
}
Human.prototype = new SentientBeing("Earth", "federation standard");

function Romulan() {
  this.being = "Romulan";
}
Romulan.prototype = new SentientBeing("Romulus", "romulan");

function Klingon() {
  this.being = "Klingon";
}
Klingon.prototype = new SentientBeing("Qo\"noS", "klingon");

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above. X
assert((new Human()).sayHello(new Romulan()) === "Jolan\"tru",
  "The romulan should hear Jolan\"tru");
assert((new Romulan()).sayHello(new Klingon()) === "nuqneH",
  "The klingon should hear nuqneH");
assert((new Romulan()).sayHello(new Human()) === "hello",
  "The human should hear hello");
assert((new Klingon()).sayHello(new Human()) === "hello",
  "The human should hear hello");
assert((new Klingon()).sayHello(new Romulan()) === "Jolan\"tru",
  "The romulan should hear Jolan\"tru");

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one X
//*********************************************************
function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {

    if (a.charAt(a.length - 1).toLowerCase() > b.charAt(b.length - 1).toLowerCase()) {
      return 1;

    } else if ((a.charAt(a.length - 1).toLowerCase() < b.charAt(b.length - 1).toLowerCase())) {

      return -1;

    } else {

      return 0;
    }

    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // read this: http://www.w3schools.com/jsref/jsref_sort.asp
  }

  stringArray.sort(byLastLetter);
  return stringArray;
}

// Assertions for lastLetterSort
var myArray = [ "Bunny", "Z", "Bronx", "Bullet", "Cape", "A", "B" ];
assert(lastLetterSort(myArray).join() === "A,B,Cape,Bullet,Bronx,Bunny,Z", "The result should look like this: [ 'A', 'B', 'Cape', 'Bullet', 'Bronx', 'Bunny', 'Z' ]");

var anotherArray = [ "Test", "this", "array", "now" ];
assert(lastLetterSort(anotherArray).join() === "this,Test,now,array", "They must not be in the correct order.");

function sumArray(numberArray) {
  // TODO: implement me using forEach X
  var sum = 0;
  function doAddition(item) {
   sum += item;
  }
  numberArray.forEach(doAddition);
  return sum;
}

// Assertions for sumArray
assert(sumArray( [ 1, 2, 3, 4, 5 ] ) === 15, "Should sum to 15");
assert(sumArray( [ 50, 25, 100, 300 ] ) === 475, "Should sum to 475");

// Assort array of numbers
function sumSort(arrayOfArrays) {
  arrayOfArrays.sort( function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array X
    return sumArray(a) - sumArray(b);
  });

  return arrayOfArrays;
}

// Assertions for sumSort function
var manyArrays = [ [ 1, 1, 1 ], [ 1, 2, 3 ], [ 0, 0, 0 ], [ 1, 1, 1, 1, 1 ] ];
assert(sumSort(manyArrays).toString() === "0,0,0,1,1,1,1,1,1,1,1,1,2,3", "The arrays must not be in the correct order.");

var moreArrays = [ [ 1, 1, 2 ], [ 13, 21, 34, 55 ], [ 3, 5, 8 ] ];
assert(sumSort(moreArrays).toString() === "1,1,2,3,5,8,13,21,34,55", "You did not obtain the Fibonacci sequence.");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
