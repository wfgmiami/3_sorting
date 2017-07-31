/*
function split(wholeArray){

    firstHalf = wholeArray.slice(0,wholeArray.length/2);
    secondHalf = wholeArray.slice(wholeArray.length/2);

  return [firstHalf, secondHalf];
}


function merge(a1,a2){
  var arr = [];
  var ind1 = 0, ind2 = 0;;
  if (a2 === undefined)
    return a1;

  while (ind1 < a1.length && ind2 < a2.length ){
    if (a1[ind1] < a2[ind2]){
      arr.push(a1[ind1++]);
    }else{
      arr.push(a2[ind2++]);
    }
  }

  if (ind1 === a1.length){
    arr = arr.concat(a2.slice(ind2));
  }else{
    arr = arr.concat(a1.slice(ind1));
  }
  return arr;
}

function mergeSort(array) {

  var arr = array.map(function(item){
    return [item];
  });

 while (arr.length > 1){
  var temp = [];
  for (var i = 0; i < arr.length; i+=2){
      temp.push(merge(arr[i],arr[i+1]));
  }
  arr = temp;
 }
  return arr[0];

}

*/

// redone on 7/15/17
function split(arr){
  var half = Math.floor(arr.length / 2)
  var arr1 = arr.slice(0, half);
  var arr2 = arr.slice(half);
  return [arr1, arr2]
}

function merge(arrA, arrB){
  var a = 0;
  var b = 0;
  var res = [];

  while( a < arrA.length && b < arrB.length ){
    if( arrA[a] < arrB[b] ){
      res = res.concat(arrA[a]);
      a++
    }else{
      res = res.concat(arrB[b]);
      b++;
    }
  }
  if( a < arrA.length ){
    res = res.concat( arrA.slice(a) )
  }else{
    res = res.concat( arrB.slice(b) )
  }
  return res;

}

function mergeSort(arr){
  if( arr.length === 1 ) return arr;

  var splits = split(arr);

  return merge( mergeSort(splits[0]), mergeSort(splits[1] ) )

}
