var readInput = function () {
  var input = document.getElementById("input1");
  console.log(input.value);
};

var btn2 = document.createElement("button");
// btn2     => <button></button>

btn2.innerHTML = "버튼2";
btn2.onclick = readInput;
// 함수 호출인 readInput() 이 아닌 함수 연결로 해주어야 한다.

var test = document.getElementById("test");
//test.appendChild(document.createElement("br"));
// br 추가
test.appendChild(btn2);
