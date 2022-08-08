var foo = function(x){
    var y = 2 * x + 3;
    return y;
}

//typeof foo 를 하면 " function " 이라 출력된다.

foo(2);             // 7
foo(3);             // 9

var r = foo(2);             // r = 7 
