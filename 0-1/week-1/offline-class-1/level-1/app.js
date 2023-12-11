// ****** STRING METHODS
// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
// getLength("Hello World");

function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
  }
// findIndexOf("Hello World", "World");

function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  // getSlice("Hello World", 7, 9);

function cutIt(str, startIndex, endIndex){
    let newStr = '';
    if(endIndex > str.length) endIndex = str.length
    for(let i=startIndex;i<endIndex;i++){
        newStr += str[i];
    }
     console.log(newStr);
}
// cutIt("harkirat singh", 2, 5);

// const str = 'Hello world!'
// console.log(str.replace('world', 'JavaScript'))

function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
// splitString("Hello World! This is Sameer", " ");

function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
// trimString("       Hello     World ");


// ****** NUMBER METHODS
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
// explainParseInt("42");
// explainParseInt("42px");
// explainParseInt("3.9");


function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
// explainParseFloat("3.14");
// explainParseFloat("42");
// explainParseFloat("42px");


// ****** ARRAY METHODS

// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
// pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
// popExample([1, 2, 3]);


function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift()
  console.log("After shift:", arr);
}
// shiftExample([1, 2, 3]);

// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
// forEachExample([1, 2, 3]);
[1, 2, 3].forEach((ele) => console.log(ele + 'exe'))

