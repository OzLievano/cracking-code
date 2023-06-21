function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.

  // decalre results array to return
  let min = [Number.MIN_VALUE, Number.MAX_VALUE];
  // sort both of these arrays 
  arrayOne.sort((a,b) => a - b);
  arrayTwo.sort((a,b) => a - b);
  // have a pointer for arrayOne
  let arrayOnePointer = 0;

  //have a pointer for arrayTwo 
  let arrayTwoPointer = 0;

  while (arrayOnePointer < arrayOne.length && arrayTwoPointer < arrayTwo.length) {
    let arrayOneVal = arrayOne[arrayOnePointer];
    let arrayTwoVal = arrayTwo[arrayTwoPointer]
    let absDiff = Math.abs(arrayOneVal - arrayTwoVal);

// if the absoluteDifference is === 0 return pair of numbers as an array
    if(absDiff < Math.abs(min[0] - min[1])) {
      min = [arrayOneVal, arrayTwoVal];
    }

  // if arrayTwo[I] < arrayone[i] move arrayTwoPointer
    if(arrayOneVal < arrayTwoVal){
      arrayOnePointer++;
  // if arrayOne[I] < arrayTwo[i] move arrayOnePointer
    } else if (arrayOneVal > arrayTwoVal) {
      arrayTwoPointer++;
    } else if (arrayOneVal === arrayTwoVal){
      return [arrayOneVal, arrayOneVal];
    }
  }
  
  return min;
}