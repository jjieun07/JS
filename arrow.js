// 기본 구문
let func = () => {
  return 'arrow'
}

let sum = (a, b) => {
  return a + b
}
// console.log(sum(1, 2));


// 매개변수 목록 내 비구조화 지원
let f = ([a, b] = [1, 2], { x: c } = { x: a + b }) => a + b + c
// console.log(f())

// 화살표 함수에서는 this가 바인딩되지않음
// 코드에서 바로 바깥의 함수(혹은 class)의 this 값 사용
function Person() {
  this.age = 0

  setInterval(() => {
    this.age++
  }, 1000)
}

let p = new Person()

// this 바인딩 안됨
// call() / apply()는 인자만 전달 가능
let adder = {
  base: 1,
  add: function (a) {
    let f = v => v + this.base
    return f(a)
  },

  addThruCall: function (a) {
    let f = v => v + this.base;
    let b = {
      base: 2
    };
    return f.call(b, a)
  }

}

console.log(adder.add(1));
console.log(adder.addThruCall(1));