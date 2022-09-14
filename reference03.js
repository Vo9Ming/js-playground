var arr1 = [1, 2, 3, 4, 5];
var arr2 = arr1;
arr2; // (5) [1, 2, 3, 4, 5]

arr1.push(6);
arr1; // (6) [1, 2, 3, 4, 5, 6]
arr2; // (6) [1, 2, 3, 4, 5, 6]
arr1 === arr2; // true 완전히 같은 놈이다! 바뀌면 같이 바뀐다.

var p1 = {};
var p2 = p1;
p1 === p2; // true
p1.name = "honux";
p1 === p2; // true
p1; // {name : "honux"}
p2; // {name : "honux"}

// 일반 변수와 달리 참조 변수이기 때문에 가능하다.
