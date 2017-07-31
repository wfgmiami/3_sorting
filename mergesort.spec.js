describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]]);
    expect(split([1,2,3,4,5,6,7])).toEqual([[1,2,3],[4,5,6,7]]);
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
     expect(merge([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
  });
})

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
     expect(mergeSort([6,1,5,8,19,2,-2])).toEqual([-2,1,2,5,6,8,19]);
  });
})

