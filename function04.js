//// 리턴값이 있는 함수 : 리턴 값이 있을 경우 함수를 호출해서 변수에 값을 넣을 수 있다. 

var five = function(){
    return 5; 
}
//리턴은 한개의 값만 리턴해준다. 

five();             // 5 를 리턴

var x = five();     // x 를 치면 5가 도출된다. 즉, x에 값을 넣어줄 수 있다. 


//// 리턴값이 없는 함수 
var foo = function(){
    console.log("I am foo");
}

var x = foo();                  // x 는 undefined 가 도출 , 왜냐하면 리턴값이 없는 함수이기 때문이다. 

// 리턴값이 있어야만 변수에 함수를 넣어줄 수 있다. 


//// 아무 값도 없는 리턴 사용하기 : 리턴으로 함수를 종료하는데 사용할수 있다. 
// 루프를 빠져나갈 때는 break , 함수를 빠져나갈 때는 return !!!!!


var test1 = function(text) {
    if (text === "exit") {
      return;
    }   
    console.log("보이나요?");    
  }
  
  test1("hoho");
  test1("exit");


  test1("abc");            // 보이나요? 가 도출 
  test1("exit");           // undefined 가 도출. 왜냐하면 중간에 함수가 return을 만나면서 끝나버렸기 때문에!


  