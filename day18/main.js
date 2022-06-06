// Day 18: 6/6/2022: Promises

// A Promise is in one of these states:

// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: meaning that the operation completed successfully.
// - rejected: meaning that the operation failed.

// As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

// ### Promise constructor

// We can create a promise using the Promise constructor. We can create a new promise using the key word `new` followed by the word `Promise` and followed by a parenthesis. Inside the parenthesis, it takes a `callback` function. The promise callback function has two parameters which are the _`resolve`_ and _`reject`_ functions.

// ```js
// // syntax
// const promise = new Promise((resolve, reject) => {
//   resolve('success')
//   reject('failure')
// })
// ```

// ```js
// // Promise
// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     if (skills.length > 0) {
//       resolve(skills)
//     } else {
//       reject('Something wrong has happened')
//     }
//   }, 2000)
// })

// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       if (skills.length > 0) {
//         resolve(skills)
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })
  
//   doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.log(error))
//   ```
  
//   ```sh
//   ["HTML", "CSS", "JS"]

// ## Fetch API

// The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set. In this challenge we will use fetch to request url and APIS. In addition to that let us see demonstrate use case of promises in accessing network resources using the fetch API.

// ```js
// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API obj as JSON
//   .then(obj => {
//     // getting the obj
//     console.log(obj)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens

// ## Async and Await

// Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.

// ```js
// const square = async function (n) {
//   return n * n
// }

// square(2)
// ```

// ```sh
// Promise {<resolved>: 4}
// ```

// The word _async_ in front of a function means that function will return a promise. The above square function instead of a value it returns a promise.

// How do we access the value from the promise? To access the value from the promise, we will use the keyword _await_.

// ```js
// const square = async function (n) {
//   return n * n
// }
// const value = await square(2)
// console.log(value)

// ## Exercises

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// ### Exercises: Level 1

// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

// ### Exercises: Level 2

// 1. Print out all the cat names in to catNames variable.

// ### Exercises: Level 3

// 1. Read the cats api and find the average weight of cat in metric unit.
// 2. Read the countries api and find out the 10 largest countries
// 3. Read the countries api and count total number of languages in the world used as officials.

// Level 1

fetch(countriesAPI)
    .then(response => response.json())
    .then(obj => {
        obj.forEach((obj,id) =>{
            let newObj ={
                name: obj.name,
                capital:obj.capital,
                languages: obj.languages,
                population:obj.population,
                area: obj.population
            }
            // console.log([id,newObj])
            // {
            //     console.log(obj.name),
            //     console.log(obj.capital),
            //     console.log(obj.languages),
            //     console.log(obj.population),
            //     console.log(obj.area)
            // }
        })
        
    })
    .catch(err => console.log('lỗi !'));

// Level 2:
 
let catNames = [];
fetch(catsAPI)
    .then(res => res.json())
    .then(cats => {
        cats.forEach((cat,index) => {
            catNames.push(cat.name)
        })
    })

// console.log(catNames)

// Level 3:

// 1
let averageWeight =[]
fetch(catsAPI)
.then(res => res.json())
.then(cats => {
    cats.forEach((cat,id) =>{
        let s = cat.weight.metric;
        let partten = /\d+/g
        let [s1,s2] = s.match(partten)
        let avg = (+s1 + +s2)/2
        averageWeight.push([id,cat.name,`average weight: [${s1} - ${s2}], ${avg}`])
    })
})
// console.log(averageWeight);

// 2
let areas = [];

fetch(countriesAPI)
.then(res => res.json())
.then(countries => {
    countries.forEach((country,id) => {
        areas.push(country.area)
        // console.log(typeof country.area)
    })
    areas.sort((a,b) => {
        return b-a;
    })
    console.log(areas)
    // console.log(typeof areas, areas.length)

    console.log(areas[0])
    console.log(areas[areas.length-1])
    for (let i=0;i<10;i++)
    {
        console.log(areas[i])
    }

})


