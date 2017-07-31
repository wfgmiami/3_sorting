// var bubbleSort = function(arr){
//    if(!arr.length || arr.length === 1){
//      return arr;
//    }

//   for (var i = 0; i < arr.length - 1; i++){
//     for (var j = 0; j < arr.length - 1 - i; j++){
//       arr = compare(j, arr);
//     }
//   }

//  return arr;

// }

// // const c = {};
// function compare(index, arr) {
//   // console.log(arr);
//   if (arr[index] > arr[index + 1]){
//     arr = swap(index, arr);
//   }
//   return arr;
// }


// function swap(index, arr) {
//   var temp = arr[index + 1];
//     arr[index + 1] = arr[index];
//     arr[index] = temp;

//     return arr;
// }

// re-done on 7/15/17
function bubbleSort(arr){
  console.log(arr)
  if( arr.length === 0 || arr.length === 1 ) return arr;

  for (var i = 0; i < arr.length - 1; i++ ){
    for( var j = i + 1; j < arr.length; j++ ){
      compare(arr,i,j)
    }
  }
  return arr;
}

function compare(arr, numA, numB){
     if( arr[numA] > arr[numB] ){
        var temp = arr[numA];
        arr[numA] = arr[numB];
        arr[numB] = temp;
      }
}

