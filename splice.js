///// splice() //////
/*
사용법 : splice(startIndex, numElement)
- 배열을 startIndex 부터 numElement 개수만큼 잘라냅니다.
- 잘라낸 원소들은 원본 배열에서 사라집니다. (즉, 기존 배열에 영향을 준다.)
- slice() 와 splice()는 둘다 유용하므로 각각의 사용법을 잘 기억해 놓는 것이 좋다.
*/
var a = [1, 2, 3, 4, 5, 2, 3];

var a2 = a.splice(5, 2);
// 5번째 원소부터 2개를 자른다.

a2;
// [2, 3] 이 도출된다.
a;
// [1, 2, 3, 4, 5]가 도출된다.
// 즉, 기존 배열에 영향을 준다.

var a2 = splice(2, 3);
a2;
// [3, 4, 5]
a;
// [1, 2]

// slice 는 기존 배열이 변하지 않는다.
// splice 는 기존 배열이 변한다.

var s = "hello";
s.split(2, 2);
// 에러가 난다.
// 왜냐하면 splice는 string 을 바꿔버리려고 하는데
// string 은 바꿀수 없는 불변성의 성질을 가지고 있기때문에
