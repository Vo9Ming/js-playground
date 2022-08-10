var p1 = {};        // []로 하면 배열이 생기는 것처럼, {} 로 하면 객체가 하나 생김. 

typeof p1;          // object가 도출 
p1;                 // {}이 도출 

//// 속성 : 객체에 속한 변수
p1.name = "crong";
p1;                 // {name : "crong" } 이 도출 , 
                    // p1이라는 객체에 name이라는 속성이 생겼고 그 값이 crong 
p1.name = "Honux";
console.log(p1.name);       //Honux 가 도출 


//// 메소드 : 객체에 속한 함수 
p1.eat = function(food){
    console.log(food + "를 먹습니다.");
}

p1                  // { name : "Honux", eat : f} : p1은 name이라는 속성과 eat이라는 메소드를 가짐.
p1.eat("chicken");   // chicken를 먹습니다. 가 도출 
p1.eat("바나나");      // 바나나를 먹습니다. 


//// this 키워드 
var p2 = {};
p2.name = "crong";
p2.weight = 100;
p2.eat = function(food){
    console.log(this.name + "이 " + food + "를 먹었습니다.");
    p2.weight += 1;
}

// 여기서 this.name 대신 p2.name을 사용하고 싶겠지만....
// p2가 인식이 되지않는다. 왜냐하면 함수 메소드의 내부에서 바깥에 있는 p2를 읽을 수 없기때문이다.
// this 는 '나'를 의미하기때문에 여기서 this는 p2를 의미한다. 

p2.eat("치킨");
// crong이 치킨을 먹었습니다. 가 도출된다. 
p2;            //{name : "crong", weight : 101, eat : f}가 도출

p2.eat("맥주");
// crong이 맥주를 먹었습니다. 가 도출된다.
p2;            //{name : "crong", weight : 102, eat : f}가 도출

p2.name = "pobi";
p2;             //{name : "pobi", weight : 102, eat : f}가 도출
p2.eat("소주");
p2;             //{name : "pobi", weight : 103, eat : f}가 도출 


////JSON    : 자바스크립트에서  객체를 표기하는 방법 
var m1 = {
    name : "honux",
    hp : 100,
    power : 20,
    attack : function(target){
        target.hp -= this.power;        //m1.power은 쓰일수 없다.
    }
};

m1.attack(m1);
m1;             // {name : "honux", hp : 80, power : 20, attack : f} 가 도출 