function moveElementToEnd(array, toMove) {
  // Write your code here.

  // two pointer method
  // start, end
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let num1 = array[start];
    let num2 = array[end];
  // we move end inwards so long as the array[i] === toMove
    if(num2 === toMove){
      end--;
  // we move start inwards so long as the array[i] !== toMove
    } else if(num1 !== toMove) {
      start++;
  // when pointers are not moving we swap them
    } else {
      let temp =  array[start]
      array[start] = array[end]
      array[end] = temp
    }    
  }

  return array;
}