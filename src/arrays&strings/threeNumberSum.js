function threeNumberSum(array, targetSum) {
  // Write your code here.
  const results = [];
  array.sort((a,b) => a- b);
  // for this index , get my every single combination and then iterate 
  for (let i = 0; i < array.length - 2; i++) {
    // -2 ensures we will always have a triplet available
    let left = i + 1;
    let right = array.length - 1;
    
    while (left < right) {
      const curr = array[i];
      const leftNum = array[left];
      const rightNum = array[right];
      const sum = curr + leftNum + rightNum;
      
      if (sum === targetSum) {
        results.push([curr, leftNum, rightNum]);
        left++;
        right--;
      } else if (sum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return results;
}