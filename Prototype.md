# Prototype

- 생성자로 만든 객체는 프로토타입이라는 속성을 가집니다. <br/>
  (여기서 프로토타입이란 클래스간에 공유하는 속성이라고 우선 알고있을것) <br/>
  자바스크립트로 객체 지향 프로그래밍을 하기 위해서는 프로토타입을 잘 이해해야한다. <br/>
  나중에 프로젝트를 진행하면서 보고 느낄 수 있다. <br/><br/>

function Human(name, hp, mp, power) { <br/>
this.name = name; //m1.name = name; <br/>
this.hp = hp; <br/>
this.mp = mp; <br/>
this.power = power; <br/>
} <br/><br/>

Human.prototype.attack = function(target) { <br/>
target.hp -= this.power; <br/>
}; <br/><br/>

=> 휴먼 생성자를 만들때 메소드를 생성자안에 넣으면 비효율적이다. <br/>
이름, hp, mp, power 은 각각 가지는 것이지만, <br/>
attack이라는 메서드는 각각 가질 필요가 없는 메서드이다. <br/>
왜냐 인간들이 공통으로 가지는 메서드이기 때문에 이것을 프로토타입으로 묶어주면 한개만 생긴다. <br/>
전에 배웠던대로 메서드를 생성자 안에 넣게되면 각각 attack이라는 메서드를 갖는 것이기 때문에 <br/>
메모리상으로 상당히 비효율적이다. <br/>
이 이외에도 프로토타입은 많은 기능들을 담고 있지만 우선은 이정도만!!! <br/>
=> Prototype01.js <br/><br/>

## 배열과 객체

- 객체의 속성값이 배열이 될 수 있습니다. <br/>
- 배열 안에 값들이 객체가 될 수 있습니다. <br/>
  => Prototype01.js ======== 이후 <br/><br/>

## 배열, 객체와 참조변수

객체를 변수에 할당하면 그 변수는 참조 변수가 됩니다. <br/>
배열도 객체이므로 배열을 변수에 할당하면 역시 참조 변수가 됩니다. <br/>
함수 호출시 참조 변수를 매개 변수로 전달하면 함수 내부에서 변경한 값이 외부에서도 변경된다는 것 꼭 기억하세요. <br/><br/>