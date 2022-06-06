// Day 21: 6/6/2022: DOM

/*
## Exercises

### Exercise: Level 1

1. Create an index.html file and put four p elements as above: Get the first paragraph by using **_document.querySelector(tagname)_** and tag name
2. Get each of the the paragraph using **_document.querySelector('#id')_** and by their id
3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_** and by their tag name
4. Loop through the nodeList and get the text content of each paragraph
5. Set a text content to paragraph the fourth paragraph,**_Fourth Paragraph_**
6. Set id and class attribute for all the paragraphs using different attribute setting methods

### Exercise: Level 2

1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
1. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
1. Set text content, id and class to each paragraph

### Exercise: Level 3

#### DOM: Mini project 1

1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder.  Apply all the styles and functionality using JavaScript only.

   - The year color is changing every 1 second
   - The date and time background color is changing every on seconds
   - Completed challenge has background green
   - Ongoing challenge has background yellow
   - Coming challenges have background red
*/

// Level 1:
// 1
let firstElementP = document.querySelector('p')
console.log(firstElementP);

let pElements = document.querySelectorAll('p')
console.log(pElements);

pElements.forEach((element, index) => {
    element.setAttribute('class',`paragraph-${index}`)
})
console.log(pElements)

pElements.forEach((ele, index) => {
    ele.innerText = `đây là đoạn văn thứ ${index +1 }`;
})

pElements.forEach((ele, index) => {
    console.log(ele.innerText);
})

// Level 2:

let pClass = document.getElementsByTagName('p')

console.log(pClass)

pClass[1].style.color = 'green'
pClass[3].style.backgroundColor = 'red'
pClass[2].style.fontFamily = 'Arial'

// Level 3: Mini project 1
let liElements = document.querySelectorAll('li')
liElements.forEach((value, id) => {
    let text = value.innerText;
    if (text.includes('Done')) {
        value.style.backgroundColor = 'green'
    }
    else if (text.includes('Ongoing')) {
        value.style.backgroundColor = 'yellow'
    }
    else if (text.includes('Coming')) {
        value.style.backgroundColor = 'red'
    }
})



