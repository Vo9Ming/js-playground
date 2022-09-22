//console.log("button.js");

var test = document.getElementById("test");
// <div id = "test">메뉴판 예제</div>

var menu = document.createElement("ul");
// menu;    =>    <ul></ul>

var item1 = document.createElement("li");
// item1;   =>    <li></li>

item1.innerHTML = "치킨";
// item1;   =>    <li>치킨</li>

menu.appendChild(item1);
// menu;
//  <ul>
//      <li>치킨</li>
//  </ul>

var item2 = document.createElement("li");
item2.innerHTML = "짜장면";

menu.appendChild(item2);
// menu;
//  <ul>
//      <li>치킨</li>
//      <li>짜장면</li>
//  </ul>

var item3 = document.createElement("li");
item3.innerHTML = "짬뽕";
menu.appendChild(item3);

test.appendChild(menu);
// 기존의 엘리먼트에 자식으로 추가 할 수 있다.
