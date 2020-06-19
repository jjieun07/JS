function* interrogate() {
  const name = yield "What is your name?";
  const color = yield "What is your favorite color?";
  return `${name}s favorite color is ${color}`;
}

const it = interrogate();
// console.log(it.next());  // next(): generator 실행 - yield 구문까지 실행하고 종료, 재호출시 마지막 yield 지점에서 시작
// console.log(it.next('Ethan'));
// console.log(it.next('orange'));

function* abc() {
  yield 'a';
  yield 'b';
  return 'c'; // return : 위치 상관없이 done > true, value > retrun 이 반환하는 값
}

const it2 = abc() // iterator 반환 - 함수를 바로 실행하지 않고 일시정지 한 상태
// console.log(it2.next())
// console.log(it2.next())
// console.log(it2.next())

// 'c'는 출력되지 않음
for (let i of it2) {
  // console.log(i);
}

function* func1() {
  yield 42;
  yield 22;
}
// function* func2() {
//   yield func1() 
// }
function* func2() {
  yield func1
}
// function* func2() {
//   yield* func1()  // yield*: generator 함수에서 iterator(generator 가 활성화된 상태)를 반환할 때 사용
// }

const iterator = func2();
console.log(iterator.next().value);
console.log(iterator.next().value);
