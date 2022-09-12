var a = [1, 2, 3, 4, 5];

// indexOf(3) => 3이라는 원소가 어디에 위치해 있는지 알려준다.
a.indexOf(3);
// 2 가 도출된다.
a[2];
// 3 이 도출된다.
a.indexOf(1);
// 0 이 도출된다.
a[0];
// 1이 도출된다.

a.push(2);
a.push(3);

a;
// [1, 2, 3, 4, 5, 2, 3]

a.indexOf(1);
// 0
a.indexOf(2);
// 1 만 도출된다. 즉, 2가 나타나는 첫번째 위치만을 찾는다
a.lastIndexOf(2);
// 5 가 도출된다. 즉, lastIndexOf() 는 뒤쪽부터 첫번째로 찾은 원소의 위치만을 알려준다.

a[5];
// 2

a.lastIndexOf(3);
// 6

a.indexOf(100);
// -1 이 도출된다.

if (a.indexOf(100)) {
  console.log("100이 없네");
}
// if(a.indexOf(100) === -1) => a의 배열에 100이라는 원소가 없다면 이라는 뜻
