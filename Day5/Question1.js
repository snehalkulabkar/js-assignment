var inputArray = [];
var size = 5; 

for(var i=0; i<size; i++) {

    inputArray[i] = prompt('Enter Element ' + (i+1));
}
console.log(inputArray);


// filter
let odd = inputArray.filter(el=>el%2==1);
let cubes = inputArray.filter(el=>el%2==1).map(el=>el**2*el);

console.log(odd);
console.log(cubes);
