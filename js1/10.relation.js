//대소관계 비교 연산자
// >, <, >=, <=
console.clear();
console.log(2 > 3);
console.log(2 <= 3);

//연산자의 우선순위
let a = 2;
let b = 3;
let result = ((a + b) * 4) / 5;

// 동등 비교 관계 연산자 ==
// == 값이 같은가
// != 값이 다른가
// === 값과 타입(텍스트,불리안 등)까지 같은가
// !== 값과 타입이 다른가

console.clear();

console.log(2 == 2);
console.log(2 != 2);
console.log(2 == '2');
console.log(2 === '2');
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);

const obj1 = { name: 'somy' };
const obj2 = { name: 'somy' };
console.log('참조주소', obj1 === obj2); // 동일하게 생겼어도 이것이 아니라 이것의 주소를 비교하는 것이기 때문에 false출력
console.log('객체내부', obj1.name === obj2.name);
