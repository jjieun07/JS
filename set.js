let mySet = new Set()

mySet.add(1)
mySet.add(5)
mySet.add(5)  // 중복 값 안들어감
mySet.add('same text')

let o = { a: 1, b: 2 }
mySet.add(o)

console.log(mySet);
// console.log(mySet.size)

// Set 순회
for (let item of mySet) {
  // console.log(item);
}

for (let [key, value] of mySet.entries()) {
  // console.log(key, value);  // key와 value 같음
}

mySet.forEach(function (value) {
  console.log(value);
})

// Array 객체와의 관계
let myArray = ['value1', 'value2', 'value3']
let mySet2 = new Set(myArray)

console.log(mySet2);
console.log([...mySet2]); // Array로 변환