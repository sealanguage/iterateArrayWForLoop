function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for ( let i = 0; i < arr.length -1; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    } else {
      if (arr[i] === 0[arr.length]) {
        newArr.push(arr[i]++);
      }
    }
  }
  // change code above this line
  return newArr;
}
