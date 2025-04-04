/**
 * let, const, (var)
 *
 * 메모리
 */
console.clear();

let test = '텍스트';
console.log('출력확인1', test);

test = 100;
console.log('출력확인3', test);

//let변수 변경가능
let a = 'test';
a = 'test2';
let b;
b = 100;
console.log(b);

// let b : 같은 변수명으로 선언할 수 없다.

// const (상수 변경불가)
const c = 'test4'; // const는 선언만 불가 반드시 할당해야함
//c ='test5'; 처럼 재할당 재선언 불가

var d = 'test';

const MAX_FRUIT = 100;