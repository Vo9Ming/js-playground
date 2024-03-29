///// join() /////
// 배열을 문자열로 바꿀 때 사용합니다.

var a = [1, 2, 3, 4, 5];

var a2 = a.join();
// join은 배열의 원소들을 문자열로 만들어준다.
// ( ) 안에 아무것도 없으면 쉼표를 기준으로 만들어준다 쉼표로 구분짓는다. __ 통째로 문자열

a;
// [1, 2, 3, 4, 5]
a2;
// "1, 2, 3, 4, 5"

a.join(""); //공백.
// "12345"  쉼표없이 그대로 붙여버린다.
a.join("---");
// "1---2---3---4---5"

/////////////////////////////////////미리보기
var s = "hello";
var a3 = s.split("");

a3;
// ["h", "e", "l", "l", "o"]
a3.join();
// "h,e,l,l,o"

a3.join("");
// "hello"
