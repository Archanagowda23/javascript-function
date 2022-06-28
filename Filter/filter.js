const arr = [5, 1, 3, 2, 6];

function isOdd(x){
    return x % 2;
}

function isEven(x){
    return x % 2 == 0;
}
 
const result = arr.filter(isOdd);
const result1 = arr.filter(isEven);

console.log("using inbuilt filter method odd number is", result);
console.log("using inbuilt filter method even number is", result1);



// Custom function

Array.prototype.myfilter = function (predicate) {
  let filteredArray = [];
  let result = "";
  for (let index = 0; index < this.length; index++) {
    result = predicate(this[index], index, this);
    if (result) {
      filteredArray.push(this[index]);
    }
  }
  return filteredArray;
};

myOutput = arr.myfilter((x) => {
  return x % 2;
});
console.log("using custom filter method ", myOutput);

//output [ 1, 3, 5 ]