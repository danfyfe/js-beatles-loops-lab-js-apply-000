function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array){
  var newArray = [];
  while (array.length){
    newArray.push(array.shift() + '!!!');
  }
  return newArray;
}



function iLoveTheBeatles(numb){
  var array = [];
  do {
    array.push('I love the Beatles!')
  } while ()
}