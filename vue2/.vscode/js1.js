//배열의 재할당
let arr = [10,20,30];
console.log(arr[0]);
console.log(arr[1]);

// let a1 = arr[0];
// let a1 = arr[1];

let [a1, a2, a3] = arr;

let person = {name:' 홍길동', age:20}
let{name, age} = person
console.log(name);
console.log(age);
