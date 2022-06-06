// Day 19: 6/6/2022: closures
// ngày code tối ôn thi cuối kì huhu :<

// Lí thuyết

// ## Closure

// JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.

// ```js
// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count
//     }

//     return innerFunction
// }
// const innerFunc = outerFunction()

// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())

// ## Exercises

// ### Exercises: Level 1

// 1. Create a closure which has one inner function

// ### Exercises: Level 2

// 1. Create a closure which has three inner functions


// Level 1:
function FuncOuter(value)
{
    value += 5
    function inner(){
        return value+=22;
    }
    return inner;
}

let test = FuncOuter(11);
console.log(test())
console.log(test())

// Level 2:
function closure()
{
    let count = 22;
    function closure1(){
        return count+=5;
    }
    function closure2(){
        return count+=2003;
    }
    function closure3(){
        return count+=2011;
    }
    return {
        'hàm 1':closure1(),
        'hàm 2':closure2(),
        'hàm 3':closure3()
    }
}
let level2 = closure();
console.log(level2['hàm 2'])
console.log(level2['hàm 1'])
console.log(level2['hàm 3'])

