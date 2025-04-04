//boolean - true, false

let isFree = true;
console.log(isFree);

//값 앞에 !!을 붙이면 불리안 타입으로 변경할 수 있다
//falshy 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

//truthy값 (0이 아닌 모든 문자열, 비어있으나 그것이 객체일 경우)
console.log(!!1);
console.log(!!-1);
console.log(!!'test');
console.log(!!{});
console.log(!!Infinity);

console.clear();
// null 비었다
let test = null;
let test2 = undefined;
console.log(typeof test);
console.log(typeof test2);
