let myMap = new Map()
let keyString = '문자열'
let keyObj = {}
let keyFunc = function () { }

myMap.set(keyString, "'문자열'과 관련된 값")
myMap.set(keyObj, 'keyObj와 관련된 값')
myMap.set(keyFunc, 'keyFunc와 관련된 값')

// console.log(myMap.size)
// console.log(myMap.get('문자열'))
// console.log(myMap.get({})); // keyObj !== {}
// console.log(myMap.get(function () { })); // keyFunc !== function() {}

// Iterator 객체 반환
// console.log(myMap.keys());
// console.log(myMap.values());
// console.log(myMap.entries());

// Map 순회
for (let [key, value] of myMap) {
  // console.log(key + " = " + value);
}

myMap.forEach(function (value, key) {
  // console.log(key + " = " + value);
})

// Array 객체와의 관계
let kvArray = [['key1', 'value1'], ['key2', 'value2']]
let myMap2 = new Map(kvArray)
console.log(myMap2);

console.log(Array.from(myMap2));  // 배열 객체로 변환
console.log(...myMap2);
console.log(Array.from(myMap2.keys()));