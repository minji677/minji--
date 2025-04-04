//실행 순서를 제어하는 것을 제어문
// 조건문, 반복문

const { log } = require('console');
const { loadavg } = require('os');

//if(조건식){실행문}
//if(조건식){실행문} else{실행문}
//if(조건식){실행문} else if{조건문} {실행문}else{실행문}
console.clear();

let frult = '배';
if (frult === 'apple') {
  console.log('사과네');
} else if (frult === 'orange') {
  console.log('오렌지네');
} else {
  console.log('사과도 오렌지도 아니네');
}

if ('tt') {
  console.log('true입니다');
} else {
  console.log('false입니다');
}

//삼항연산자
//조건식 ? 참일 경우 실행내용 : 거짓일경우 실행내용
'text' ? console.log('참') : console.log('거짓');
frult === '배' ? console.log('배 맞습니다') : console.log('배 아닙니다');
