var foo = function (v) {
  v = v * 2;
  console.log("foo: " + v);
};

var n = 10;
foo(n); // foo : 20
n; // 10, call by value (값에 의한 전달, 값만 전달) 즉, n의 값은 변하지 않는다.

var p1 = {};
var p2 = p1;
p1.name = "honux";
p1; // {name : "honux"}
p1.w = 67;
p1; // {name : "honux", w : 67}

var diet = function (people) {
  people.w -= 1;
  console.log("%s %d", people.name, people.w);
};

diet(p1); // honux 66
diet(p1); // honux 65
diet(p1); // honux 64
p1; // {name : "honux", w : 64}

/* 
일반 변수와는 다르게 함수의 매개 변수로 참조 변수를 넣어,
그리고 함수안에서 값을 바꾸면 바깥에 있는 객체도 실제로 값이 바뀌게 된다.
왜냐하면, p1과 people은 같기 때문이다.
매개변수로 객체를 넣었더니 함수안에서 바뀐값이 바깥에서도 바뀌었다.
둘이 똑같은 놈이다. call by reference (참조에 의한 전달) 
*/
