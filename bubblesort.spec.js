function numerically(a, b) { return a - b }

function generateArray(size, min, max){
  var arr = [];
  for (var i = 0; i < size; i++){
    var elem = Math.floor(min + Math.random() * max);
    arr.push(elem);
  }
  return arr;
}

describe('Bubble Sort', function(){

  it('sorts an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });

  it('sorts an array of one element', function(){
    expect(bubbleSort([7])).toEqual([7]);

  });

  it('sorts an array of many elements', function(){
    expect(bubbleSort([5,2,7,9,3,5,4,1,0])).toEqual([0,1,2,3,4,5,5,7,9]);
  });

  var test = [6,1,5,8,19];
  it('counts how many times compare was called', function(){

    spyOn(window, 'compare').and.callThrough();
    bubbleSort(test);
    expect(compare.calls.count()).toEqual(10);

  });
  it('handles an empty array', function(){
    expect( bubbleSort(test) ).toEqual( [1,5,6,8,19] );
  });

  for(var i = 2; i < 103; i += 20){
    it('generates random array with ' + i + ' elements', function(){
      var randomArray = generateArray(i, -100, 100);
      var sorted = randomArray.slice(0).sort(numerically);
      expect( bubbleSort( randomArray )).toEqual( sorted );
    })
  }

});
