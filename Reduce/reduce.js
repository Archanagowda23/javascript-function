const arr = [5, 1, 3, 2, 6];

function findMax(arr){
}

//console.log(findMax(arr));

const outputs = arr.reduce(function (max,curr){
if(curr > max){
    max = curr;
}
return max;
});

console.log("The max of all element in array is", outputs);

// Custom function 

function reduceFunction(listofNumbers, callback,initialValue) {
    let result = initialValue;
    for (let index = 0; index < listofNumbers.length; index++) {
      result = callback(result,listofNumbers[index], index, listofNumbers);
    }
    return result;
  }
  //let us try with the example
  const listofNumbers = [2, 4, 6, 8, 10];
  let output = 0;
  
  //to find sum
  output = reduceFunction(listofNumbers, (sum,num) =>{
      sum+=num;
      return sum;
  },0);
  console.log("The sum of all element in array ",output);

