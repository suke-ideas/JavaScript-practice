// Day 23: 6/6/2022: Event listeners

// Lý thuyết
// List of events:

// - click - when the element clicked
// - dblclick - when the element double clicked
// - mouseenter - when the mouse point enter to the element
// - mouseleave - when the mouse pointer leave the element
// - mousemove - when the mouse pointer move on the element
// - mouseover - when the mouse pointer move on the element
// - mouseout -when the mouse pointer out from the element
// - input -when value enter to input field
// - change -when value change on input field
// - blur -when the element is not focused
// - keydown - when a key is down
// - keyup - when a key is up
// - keypress - when we press any key
// - onload - when the browser has finished loading a page

// ## Exercises

// ### Exercise: Level 1

// 1. Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.

// ![Number Generator](./../images/projects/dom_min_project_number_generator_day_3.1.gif)

// 1. Generating the keyboard code code using even listener. The image below.

// 1

let divCreate = document.createElement('div')
document.body.appendChild(divCreate);
let div = document.querySelector('div')
console.log(div)

let btn = document.createElement('button')
document.body.appendChild(btn);
let button = document.querySelector('button');
console.log(button);

button.innerText = ' Press any key !'
button.style.fontSize = '24px'
button.style.backgroundColor = 'pink'
button.style.padding = '8px 20px'

let boxCreate = document.createElement('div')
document.body.appendChild(boxCreate)
let boxKey = document.querySelector('div')

boxKey.style.backgroundColor = 'green'
boxKey.innerText = 'Key here !';
boxKey.style.display = 'inline-block'
boxKey.style.padding = '16px 20px'
boxKey.style.margin = '80px 80px'

document.body.addEventListener('keydown', (val) => {
    
    let key = val.keyCode;
    boxKey.innerText = key;
    button.innerText = `You pressed ${val.key}`;
})


// 2
let inputCreate = document.createElement('input')
document.body.appendChild(inputCreate)
let input = document.querySelector('input')
input.placeholder = 'Generate more numbers';
input.style.padding = '16px 16px'
input.style.width = '300px'
input.style.fontSize = '16px'
input.style.borderColor = 'green'
input.style.color = 'yellow'

let btn2 = document.createElement('button');
btn2.setAttribute('class', 'button2')
document.body.appendChild(btn2)
let button2 = document.querySelector('.button2')
button2.innerText = 'Generate numbers'
button2.style.backgroundColor = 'green'
button2.style.marginLeft = '350px'
console.log(button2)

button2.style.padding = '16px'

let number
let num = input.addEventListener('input', (val) => {
    console.log(val.target.value)
    number = val.target.value;
})
// console.log(number)
button2.addEventListener('click', (e) => {
    
    // console.log(number, typeof number)
    let container = document.createElement('div')
console.log(container)
document.body.appendChild(container)

let textInner = ''
let li
let div = document.querySelector('div')
console.log(div)
for (let i = 0; i< +number; i++) {
    li = document.createElement('li');
    li.innerText = i;

    function snt(value) {
        if (value == 1) return false
        for (let i = 2; i <= Math.sqrt(value) ;i++) {
            if (value % i ==0)
            {
                return false;
            }
        }
        return true;
    }
    li.style.listStyle = 'none'
    li.style.display = 'inline-block'
    li.style.marginRight = '8px'
    li.style.marginBottom = '8px'

    li.style.width = '20px'
    li.style.height = '20px'


    if (snt(i)){
        li.style.backgroundColor = 'red'
    } else
    if (i%2 ==0)
    {
        li.style.backgroundColor = 'green';
    }
    else
    {
        li.style.backgroundColor = 'yellow'
    }
    // div.innerHTML += `${li}`
    // document.body.appendChild(li)
    div.appendChild(li)
    // textInner += `${li}`
}
// container.innerHTML = textInner
console.log(container)

})


