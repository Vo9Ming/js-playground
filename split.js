///// split() /////
/*
문자열을 문자의 배열로 나누고 싶을 때 사용하는 메소드입니다.
*/
var s = "hello, world, a-b-c";

s.split();
// ["hello, world, a-b-c"] 가 도출된다. (아무의미없는...)

var s1 = s.split(""); // 비어있는 문자
// (19) ["h", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d", ",", " ","a", "-", "b", "-", "c"]
// 각각이 하나하나 잘라진다.

s1.join("");
// "hello, world, a-b-c" 원래대로 돌아간다.

s.split(","); // ,를 기준으로 나눠진다.
// (3) ["hello", "world", "a-b-c"] 이 도출된다.

s.split(" "); // 공백을 기준으로 나눠진다.
// (3) ["hello,", "world,", "a-b-c"] 가 도출된다.

s.split("-"); // - 를 기준으로 나눠진다.
// (3) ["hello, world, a", "b", "c"] 가 도출된다.

s;
// "hello, world, a-b-c" 즉, 기존 배열에 영향을 주지는 않는다.

s.split("ll"); // ll을 기준으로 앞뒤로 나눠준다.
// (2) ["he", "o, world, a-b-c"] 가 도출된다.
