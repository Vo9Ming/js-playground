// 배열로도 한번!
var arr = [1, 2, 3, 4, 5];
var append = function (arr, v) {
  arr.push(v);
};

append(arr, 10);
arr; // (6) [1, 2, 3, 4, 5, 10]

var a2 = [];
append(a2, 1);
a2; // [1]
append(a2, 2);
a2; // [1, 2]
append(a2, 100);
a2; // [1, 2, 100]

/* 
배열도 객체이기 때문에 call by reference, 참조에 의한 전달이기 때문에 
함수안에서 바뀐 값이 밖에서도 바뀌게 된다.
*/
