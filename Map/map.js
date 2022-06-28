const arr = [5, 1, 3, 2, 6];

function double(x){
    return x * 2;
}

function triple(x){
    return x * 3;
}

function binary(x){
    return x.toString(10);
}

const output1 = arr.map(double);
const output2 = arr.map(triple);
const output3 = arr.map(binary);

console.log("Using inbuilt map function double value", output1);
console.log("Using inbuilt map function triple value", output2);
console.log("Using inbuilt map function binary value", output3);


// Custom function

var output = [];
let i;

//returns square of a number
const square = function (num) {
  return num * num;
};

for (i = 0; i < arr.length; i++) {
  output.push(square(arr[i]));
}

console.log("using custom function", output);

// output [ 25, 4, 144, 64, 16, 1 ]
