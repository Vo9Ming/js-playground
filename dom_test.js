console.log("Hello JS");

var a = document.getElementsByTagName("h2");
a; // HTMLCollection(2) [h2, h2]
a[0]; // <h2>Hello 1</h2>
a[1]; // <h2>Hello 2</h2>

a[1].innerHTML = "Good morning";
a[0].innerHTML = "Thank you";

var p = document.getElementById("main");
p.innerHTML = "나는 p태그 입니다.";
