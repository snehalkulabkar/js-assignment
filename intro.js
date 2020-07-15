// console functions menthod examples:
// console.log() method 
console.log('abc');  
console.log(1); 
console.log(true); 
console.log(null); 
console.log(undefined);  
console.log([1, 2, 3, 4]); // array inside log 
console.log({a:1, b:2, c:3}); // object inside log

// console.error() method  
console.error('This is a simple error');

// console.warn() method  
console.warn('This is a warning.');

// console.time() and console.timeEnd() method  
console.time('abc'); 
 let fun =  function(){ 
     console.log('Hello this is fun1'); 
 } 
 let fun2 = function(){ 
     console.log('fun2 is running..'); 
 } 
 fun(); // calling fun(); 
 fun2(); // calling fun2(); 
console.timeEnd('abc'); 
/* In the above code sample, we can see that the label is ‘abc’ which is same for both the time() and the timeEnd() method.
 If we increase the amount of code inside the block defined by these methods, then the time will increase. 
 It is also worth remembering that the time returned to the console will be in milliseconds and might be different each time 
 we refresh the page
*/

// console.table() method 
console.table({'people1':1, 'people2':2})

// console.group() and console.groupEnd() method 
console.group('simple'); 
  console.warn('warning!'); 
  console.error('error here'); 
  console.log('simple language'); 
console.groupEnd('simple'); 
console.log('new section'); 

// Custom Console log example 
const spacing = '10px'; 
const styles =  
    `padding: ${spacing}; background-color: white; color: green; font-style:  
    italic; border: 1px solid black; font-size: 2em;`; 
console.log('%cGeeks for Geeks', styles); 

// var kryword example
function nodeSimplified()
  {
    var a =10;
    console.log(a);  // output 10
    if(true)
    {
    var a=20;
    console.log(a); // output 20
    }
    console.log(a);  // output 20
  }

  //Let keyword example
  function nodeSimplified()
  {
    let a =10;
    console.log(a);  // output 10
    if(true)
    {
    let a=20;
    console.log(a); // output 20
    }
    console.log(a);  // output 10
  }

//const keyword example
function nodeSimplified()
  {
    const MY_VARIABLE =10;
    console.log(MY_VARIABLE);  //output 10 
  }