//// slice() ////
/* 

사용법 : slice(startIndex, endIndex)
기존 배열을 잘라서 새로운 배열을 만듭니다. 
기존 배열은 변하지 않습니다. 
startIndex 위치부터 endIndex 직전의 위치까지 자릅니다. 
endIndex의 원소는 포함되지 않습니다. 

 */

var a = [1, 2, 3, 4, 5, 2, 3];

a.slice(0, 3); // 0,1,2 의 원소를 자른다 마지막 3은 잘라내지않는다.
// slice는 원본을 안바꾼다. string도 가능함을 알 수 있다.
// 따로 변수를 선언에 담아준다.

var a2 = a.slice(2, 5);
a2;
// [3, 4, 5] 가 도출된다

var s = "hello";
s.slice(2, 4);
// "ll" 이 도출된다.

s;
// 그대로 hello

var s2 = s.slice(2, 4);
s2;
// "ll" 이 도출된다.
