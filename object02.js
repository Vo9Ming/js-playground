var Human = function (name, hp, pow) {
  this.name = name; // 여기서 this는 나 자신을 가리키는 말. 나의 name은 name이야 라는 뜻
  this.hp = hp;
  this.pow = pow;
  this.attack = function (target) {
    console.log(this.name + " 이 " + target.name + "을 공격했다.");
    target.hp -= this.pow;
  };
  this.show = function () {
    // show() : 나의 상태를 출력하는 메소드
    console.log("[%s] %d", this.name, this.hp); //%s :문자열을 출력하는 것, %d : 숫자를 출력하는 것
  };
};

var p1 = new Human("honux", 100, 10);
// 여기서 p1 을 참조변수라고 부른다. 즉, Human클래스의 인스턴스 p1이다 라고 말한다.
// 객체의 변수는 모두 참조 변수라고 부른다.
p1;
// Human {name :'honux', hp : 100, pow : 10, attack : f(함수), show : f(함수)}

var p2 = new Human("crong", 200, 1);
// Human {name : 'crong', hp : 200, pow : 1, attack : f, show : f}

var p3 = new Human("pobbi", 50, 30);
// Human {name : 'pobi', hp : 50, pow : 30, attack : f, show : f}

p1.attack(p2);
// honux 이 crong을 공격했다.

p2;
// Human {name : 'crong', hp : 190, pow : 1, attack : f, show : f}
// hp 가 10만큼 줄어든 것을 확인할 수 있다.

p3.attack(p2);
// pobi이 crong을 공격했다.

p2;
// Human {name : 'crong', hp : 160, pow : 1, attack : f, show : f}
// hp 가 30 줄어든 것을 확인할 수 있다.

p2.attack(p2);
// crong 이 crong을 공격했다. 자신이 자신을 공격함

p2;
// Human {name : 'crong', hp : 159, pow : 1, attack : f, show : f}

p1.show();
// [honux] 100
p2.show();
// [crong] 159
p2.show();
// [pobi] 50

/* 
객체를 하나만 만들 경우 JSON표기법으로 만든다. 
여러개를 만들 경우 생성자를 통해 만든다.
*/

// 예제
var Food = function (name, energy) {
  this.name = name;
  this.energy = energy;
  this.feed = function (human) {
    human.hp += this.energy;
  };
};

var d = new Food("donut", 30);
p2;
// Human {name : 'crong', hp : 159, pow : 1, attack : f, show : f}
d;
// Food {name : 'donut', energy : 30, feed : f(함수)}

d.feed(p2);

p2;
// Human {name : 'crong', hp : 189, pow : 1, attack : f, show : f}
// hp 가 30 만큼 증가해서 189 로 변경
d.feed(p2);

p2;
// Human {name : 'crong', hp : 219, pow : 1, attack : f, show : f}
// hp 가 30 만큼 증가해서 219 로 변경
