// Object.create() _ 단일 상속
// 객체는 만들지만 생성자는 실행하지 않는다 (프로토타입만 넣음)

// 상위클래스
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
}

// 하위클래스
function Rectangle() {
  Shape.call(this)  // super 생성자 호출
}

// 상위클래스 확장
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);
console.log('Is rect an instance of Shape?', rect instanceof Shape);
rect.move(1, 1)
console.log(rect);


// Object.assign _ 병합

const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }

const returnedTarget = Object.assign(target, source)
console.log(target);
console.log(returnedTarget);
