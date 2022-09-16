var Human = function (name, atk) {
  this.name = name;
  this.hp = 100; // hp는 기본값으로 100 설정
  this.pow = atk;
};

var p1 = new Human("honux", 10);
p1;
// Human{name : 'honux', hp : 100, pow : 10}
p1.attack(p1);
// 에러. 왜냐하면 아직 attack이라는 메서드가 없기때문에

Human.prototype.attck = function (target) {
  target.hp -= this.pow;
};

Human.prototype;
// {attack : f, constructor : f}

p1;
// Human {name : 'hounx', hp : 100, pow : 10}
p1.attck(p1);
// 애러가 뜨지않음.
p1;
// Human {name : 'honux', hp : 90, pow : 10}

p2 = new Human("crong", 30);
p2;
// Human {namd : 'crong', hp : 100, pow : 30}
p2.attack(p1);

p1;
// Human {name : 'honux', hp : 60, pow : 10}

// ================================================

p1.item = ["sword", "shield", "potion"];
// (3) ["sword", "shield", "potion"]

p1;
// Human {name : 'honux', hp : 60, pow : 10, item : Array(3)}

p1.item[0];
// "sword"
p1.item[1];
// "shield"
p1.item[2];
// "potion"
// 객체의 속성에 배열에 들어갈 수 있다.

var arr = [p1, p2];
arr;
// (2) [Human, Human]
arr[0];
// Human {name : 'honux', hp : 60, pow : 10, Array(3)}
arr[1];
// Human {name : 'crong', hp : 100, pow : 30}

arr[0].hp = 500;
p1;
// Human {name : 'honux', hp : 500, pow : 10, item : Array(3)}
// 참조 변수는 같은 것을 가리키는 것이기 때문에 함께 바뀐다.
// 객체 안에 속성으로 배열이 올 수 있다.
// 배열의 원소로 객체가 될 수 있다.

var p3 = new Human("pobi", 99);
p3;
// Human {name : 'pobi', hp : 100, pow : 99}
p1.friends = [p2, p3];
p1;
// Human {name : 'honux', hp :500, pow : 10, item : Array(3), friends : Array(2)}
p1.friends[0];
// Human {name ; 'crong', hp : 100, pow : 30}
p1.friends[1];
// Human {name : 'pobi', hp : 100, pow : 99}

p3.friend = p1;
p3;
// Human {name : 'pobi', hp : 100, pow : 99, friends : Human}
// 호눅스의 친구가 포비이면 포비도 호눅스의 친구이다. 즉,
p1.friends[1].friend;
// Human {name : 'honux', hp : 500, pow : 10, item : Array(3), friends : Array(2)}
p1.friends[1].friend.friends[0];
// Human {name : 'crong', hp : 100, pow : 30}
