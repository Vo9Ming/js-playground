# 객체 2

## 객체의 생성자 살펴보기

- 객체는 유지 보수를 쉽게 하기 위해서 값들을 묶어 놓은 것으로, <br/>
  속성과 메소드를 가질 수 있습니다. <br/>
  var p1 = {"name : honux", <br/>
  "eat" : function(food){}; <br/>
  }; <br/>
  => p1 이라는 객체는 name : honux, 그리고 eat이라는 함수를 담고있다. <br/>

- 생성자로 여러 객체를 쉽게 만들기 <br/>
  : 비슷한 객체를 여러개 만들 때는 객체를 생성하는 함수를 이용합니다. <br/>
  이 때, 객체를 생성하는 함수를 생성자라고 합니다. <br/>
  생성자는 관례상 대문자로 시작하는 경우가 많다. <br/><br/>

/// Human 클래스를 정의하는 함수 = 생성자 <br/>
var Human = function(name, hp, power){ <br/>
this.name = name; <br/>
this.hp = hp; <br/>
this.power = power; <br/>
this.attack = function(target){ <br/>
target.hp -= this.power; <br/>
}; <br/>
this.show = function() { <br/>
console.log("%s %d %d", this.name, this.hp, this.power); <br/>
}; <br/>
}; <br/><br/>

- 생성자를 이용해서 객체 만들기 <br/>
  : 생성자를 이용해서 객체를 만들 때는 new 키워드를 사용합니다. <br/>
  var m1 = new Human("honux", 100, 10); <br/>
  var m2 = new Human("crong", 999, 1); <br/>
  m1.attack(m2); <br/>
  m2.attack(m1); <br/>
  m1.show(); <br/>
  => "honux 99 10" <br/>
  m2.show(); <br/>
  => "crong 989 1" <br/><br/>

  위 코드에서 m1은 객체 또는 인스턴스라고 합니다. <br/>
  그리고 m1은 참조 변수입니다. <br/><br/>

- 생성자를 사용하는 이유 <br/><br/>

* 객체 하나만을 만들 때는 간단히 JSON표기법으로 만듭니다. <br/>
* 여러 객체를 만들고 싶을 때는 생성자를 통해서 만듭니다 ( new ) <br/>
