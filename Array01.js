var arr = [];       //비어있는 배열 
typeof arr          //object(객체)로 나옴
var arr2 = [50, 60, 70, 99];        
// (4) [50, 60, 70, 99] 가 나옴 :원소 4개에 숫자 50 60 70 99가 들어있다.
// arr2[0] = 50 , arr2[1] = 60 , arr2[2] = 70 , arr2[3] = 99 ... arr2[-1] 은 undefind  
// 배열이름과 곽괄호,즉 첨자를 통해 각각의 개별원소에 접근할 수 있다.


// 개별적으로 쓰고 싶을 경우,
// arr2 의 첫번째 원소를 50 이 아닌 51로 수정하고 싶을때,

arr2[0] = 51; 
// 이렇게 입력한 후 다시 arr2를 호출하면 (4) [51, 60, 70, 99] 로 변경되어 도출된다. 

// 아까 빈배열 arr 에 넣어보자
arr[0] = 10; 
arr[1] = 20;
arr[4] = 100;  //이렇게 할 경우엔 어떻게 될까???
//.... 답은 arr을 호출해보면 알 수 있다. 
// arr[0] = 10 , arr[1] = 20 , arr[2] = undefined , arr[3] = undefined , arr[4] = 100 임을 알 수 있다.
// 중간에 뛰어넘을 수 있다. 그 뛰어넘은 값은 undefined (값이 정의되지 않았다.) 로 나온다.





/////////////////////////////////////////
// 배열의 타입 알아보기! _ typeof
typeof arr[1];    // number로 나온다.

// 배열의 길이 알아보기! _ .length  : length라는 속성으로 배열의 원소 개수를 알 수 있다. 
arr2.length;      // 4 로 나온다. 

// 웃기고 신기한 것 
var x = [];         // 빈 배열
x.length;           // x의 길이는 0 
x[0] = 1;
x.length;           // 이때의 x의 길이는 1

x.length = 10;      // x의 길이를 10으로 지정하면 
                    // x는 [1, empty * 9] 로 나온다.


/////퀴즈//////
var a = [1, 2, 3, 4, 5, 6]; 
// 일때 마지막 원소를 불러오려면 지금은 배열의 길이가 짧으니 a[5];를 써도되지만  
// 너무 길어서 잘 모를때 a.length 를 찾고 -1을 해주면 된다.
// 즉, a[a.length - 1] 을 하면 됨. 그럼 배열의 맨끝의 원소에 접근할 수 있다.



/////////////////////////////////////////////////////////////////////
// 배열과 문자열은 비슷한 성질을 가지고 있다. 
// 차이는 배열은 ' Mutable ' 즉, 바꿀 수 있다. 
//      문자열은 ' Immutable ' 즉, 바꿀 수 없다.

// 아까 배열과 같이 이미 지정된 것에서 변경이 가능했지만, 
// 문자열은 이미 지정된 것에서 변경이 되지 않는다. 

var s = "hello";
s.length;               // 길이는 5
s[0];                   // s[0] 은 h 
s[0] = "k";             // 이렇게 해도 kello 가 아닌 hello 로 변함없이 나온다.
// 문자열은 바꿀수 없는 Immutable 이기 때문에 변경되지 않는다. 

// 배열의 메소드들 1 
// 객체는 속성과 메소드가 있다. 
// 즉 배열도 배열객체이기 때문에 메소드가 존재한다.

// 스택 push, pop
// push  :  배열의 마지막에 넣는다.
var b = [];             // b 라고 하는 빈 배열을 만들고 
b.push(1);              // b 에 1을 넣는다. 
b.push(2);              // b 마지막에 2를 넣는다.
b.push(3);              // b 마지막에 3을 넣는다.
                        // 그리고 b를 쳐보면 (3) [1, 2, 3] 이 도출된다.

// pop   :   맨 끝에서 부터 하나씩 뺀다.
var x = b.pop();    // 배열 b 에서 3을 빼내 x에 넣는다. 
                    // 이후에 b를 쳐보면 (2) [1, 2] 가 도출된다.
                    // 그리고 빠진 원소는 x에 담겨짐. 즉, x를 쳐보면 3이 도출됨. 

// unshift  :   배열의 앞에 새로운 값을 넣는다.
// shift    :   배열의 앞에서 부터 빼내는 것. 

c.unshift(10);  
c.unshift(30);
c.unshift(50);
// 이렇게 한 후에 c를 불러오면 (3) [50, 30, 10] 이 도출된다.

var q = c.shift();      // 맨 앞에서 빼내는 shift 이기때문에 이후의 c는 (2) [30, 10] 이 도출됨
