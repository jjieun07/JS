// 배열에서 Iterator를 가져와 Iterator 프로토콜 구현
class Log {
  constructor() {
    this.messages = []
  }
  add(message) {
    this.messages.push({ message, timestamp: Date.now() })
  }

  [Symbol.iterator]() {
    return this.messages.values()
  }
};

const log = new Log()
log.add('first day at sea')
log.add('spotted whale')
log.add('spotted another vessel')

for (let entry of log) {
  // console.log(entry);
}

// 직접 Iterator 만들기
class Log1 {
  constructor() {
    this.messages = []
  }
  add(message) {
    console.log(this.messages.values());

    this.messages.push({ message, timestamp: Date.now() })
  }

  [Symbol.iterator]() {
    let i = 0;
    const messages = this.messages
    return {
      next() {
        if (i >= messages.length) {
          return { value: undefined, done: ture }
        } return { value: messages[i++], done: false }
      }
    }
  }
}

const log1 = new Log()
log1.add('first day at sea')
log1.add('spotted whale')
log1.add('spotted another vessel')

for (let entry of log) {
  // console.log(entry);
}

// 피보나치
class Fibo {
  [Symbol.iterator]() {
    let a = 0, b = 1
    return {
      next() {
        let rval = { value: b, done: false }
        b += a
        a = rval.value
        return rval
      }
    }
  }
}

const fibo = new Fibo()
let i = 0;
for (let n of fibo) {
  console.log(n);
  if (++i > 9) break
}