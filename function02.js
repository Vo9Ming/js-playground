//// 1. 매개변수도 , 리턴값도 없는 함수. 
var func1 = function(){
    console.log("I am func1");
}

// 실행 
func1();


//// 2. 함수 호출 (함수를 사용하는 것) : 함수를 호출하기위해서는 함수명과 괄호가 필요
func1(); 



//// 3. 매개변수가 있는 함수 
var sayHi = function(name){
    console.log("Hi" + name);
}

sayHi("Pobi");


//// 4. 매개변수 2개 있는 함수 \
var add = function(n1, n2){
    console.log(n1 + " + " + n2 + " = " + (n1 + n2));
}

add(10,20);             // 10 + 20 = 30 이 도출


