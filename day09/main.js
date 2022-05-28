// Day 09: 28/05/2022 : higher function

const callback = (n) => {
    return n ** 2
  }
  
  // function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }

  console.log(cube(callback, 3))
  
  const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  console.log(higherOrder(2)(3)(10))

  const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))

function sayHello() {
    console.log('Hello')
  }
// setInterval(sayHello, 1000)

function sayHello1() {
    console.log('Hi')
  }
//   setTimeout(sayHello1, 2000)

// arr.forEach(function (element, index, arr) {
//     console.log(index, element, arr)
//   })
//   // The above code can be written using arrow function
//   arr.forEach((element, index, arr) => {
//     console.log(index, element, arr)
//   })
//   // The above code can be written using arrow function and explicit return
//   arr.forEach((element, index, arr) => console.log(index, element, arr))

  let sum = 0;
const numbers1 = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)
numbers.forEach(num => sum += num)

console.log(sum)

numbers1.forEach((num,id) =>console.log(num,id))

const numbers2 = [1, 2, 3, 4, 5]
const numbersSquare = numbers2.map((num) => num * num)

console.log(numbersSquare)

const numbers3 = [1, 2, 3, 4, 5]
const sum1 = numbers3.reduce((acc, cur) => acc + cur,20)

console.log(sum1)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => name.indexOf('a')>=0) // Are all strings?

console.log(areAllStr)

const bools = [true, true, 0, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true

const ages = [24, 22,7, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

const names5 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools5 = [0, 0, 0, true]

const areSomeTrue = bools5.some((b) =>  b === true)

console.log(areSomeTrue) //true

const areAllStr1 = names5.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr1) // false

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
console.log(products)

const numbers6 = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers6.sort()) //[100, 3.14, 37, 9.81]
numbers6.sort(function (a, b) {
  return a - b
})

console.log(numbers6) // [3.14, 9.81, 37, 100]

numbers6.sort(function (a, b) {
  return b - a
})
console.log(numbers6) //[100, 37, 9.81, 3.14]

// objArr.sort(function (a, b) {
//     if (a.key < b.key) return -1
//     if (a.key > b.key) return 1
//     return 0
//   })
  
  // or
  
//   objArr.sort(function (a, b) {
//     if (a['key'] < b['key']) return -1
//     if (a['key'] > b['key']) return 1
//     return 0
//   })
  
  const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users) // sorted ascending
  // [{…}, {…}, {…}, {…}]

// Túm lại là học các hàm 
// 1. forEach()
// 2. map()     trả về mảng mới
// 3. filter()  trả về mảng mới
// 4. reduce()  có biến tích lũy
// 5. every()   để kiểm tra tất cả phần tử có cùng điều kiện nào không
// 6. find()    trả về phần tử đầu tiên thỏa điều kiện
// 7. findIndex()   trả về vị trí của phần tử đầu tiên thỏa điều kiện
// 8. some()    kiểm tra vài phần tử giống nhau điều kiện và trả về boolean
// 9. sort()    

// level 1
console.log('Level 1')
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names7 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products7 = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach((i => {
  console.log(i)
}))

names7.forEach((i) => {
  console.log(i)
})

numbers7.forEach((i) => {
  console.log(i)
})

// 6
let countries1=countries.map((i) =>{
  return i.toUpperCase()
})

console.log(countries1)

// 7
let countries2=countries.map((i) => {
  return i.length
})

console.log(countries2)

// 8
let num8=numbers7.map((i) => {
  return i**2
})
console.log(num8)

// 10
let price1=products7.map((i) =>{
  return i.price
})

console.log(price1)

// 11
let task1=countries.filter((i) => {
  return i.includes('land')
})

console.log(task1)
// 12
let task2=countries.filter((i) => {
  return i.length==6
})

console.log(task2)

// 13
let task3=countries.filter((i) => {
  return i.length>=6
})
console.log(task3)

// 14
let task4=countries.filter((i) => {
  return i.startsWith('N')
})

console.log(task4)

// 15
let task5=products7.filter((i) => {
  return i.price>0
})

console.log(task5)

// 16
let task6=numbers7.reduce((sum,i) =>{
  return sum+i
},0)
console.log(task6)

// 20
let task7=names7.some((i) =>{
  return i.length>7
})
console.log(task7)
console.log(names7)

// 21
let task8=countries.every((i) =>{
  return i.includes('land')
})
console.log(task8)

// 23
let task9=countries.find((i)=>{
  return i.length==6
})
console.log(task9)

// 24
let task10=countries.findIndex((i)=>{
  return i.length==6
})
console.log(task10)

// 25
let task11=countries.findIndex((i) => {
  return i=='Norway'
})
console.log(task11)

// 26
let task12=countries.findIndex((i)=>{
  return i=='Russia'
})
console.log(task12)

// Level 2
console.log('Level 2')
// 1
console.log('Tìm tổng giá của sản phẩm bằng nhiều cách')

// Level 3
console.log('Level 3')


