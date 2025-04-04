//객체{}, 배열{}

//함수()
//선언함수, 익명함수

// function add(){}
// let 함수이름 = function (){}
//함수는 호출이 일어나기 전까지 실행되지 않음
console.clear();
function add() {
  console.log('함수를 호출했다');
}
add();

function add2(a, b) {
  console.log('함수내부');
  // console.log(a);
  // console.log(b);
  console.log(arguments['0']); //문자열이어서 argument.이 아니라 [0]으로 접근한다. argument는 객체 내부에 이미 장착이 되어있으므로 그냥 받아서 사용하면 된다

  return a + b;
}
let result = add2(2, 5);
console.log(result);
