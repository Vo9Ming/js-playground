/*
switch-case
    사용법 
var value; 
switch(value){
    case 값1 : 
    // value == 값1일 경우 실행할 코드
    break; // case 와 case 사이에 break가 존재해야한다. (루프를 빠져나오기 위해)
    case 값2 : 
    // value == 값2일 경우 실행할 코드
    break;
    // ....
    default : 
    // 위쪽에 해당되는 케이스가 없을 경우 실행할 코드 
    // 이때 default 뒤에는 break가 오지 않는다. 
}
*/

// 예제
//////////// if로 구현
var score = prompt("점수를 입력하세요");
if (score === 10) {
  console.log("A");
} else if (score === 9) {
  console.log("B");
} else {
  console.log("C");
}

//////////// switch-case로 구현
var score2 = prompt("점수를 입력하세요");
switch (score2) {
  case 10:
    console.log("A");
    break;
  case 9:
    console.log("B");
    break;
  default:
    console.log("C");
}
