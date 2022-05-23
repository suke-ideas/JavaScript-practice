//  Day 03: 23/05/2022

// Level 1

// 1
let fName='Bùi'
let lName='Ngân'
let country='Việt Nam'
let city='Quảng Ngãi'
let age=19
let isMarried=false
let year=2022
console.log(typeof(fName),typeof(lName),typeof(country),typeof(city),typeof(age),typeof(isMarried),typeof(year));

// 2
console.log(typeof(10),typeof('10'),typeof(10)==typeof('10'))

// 3
console.log(parseInt('9.8'),parseInt('9.8')==10)

// 4
console.log(1=='1')
console.log('1'==true)
console.log(!0==true)

let x=2
console.log(x?'true':'false')
console.log(typeof(undefined))
console.log(2==3)
console.log(false=='false')
console.log(false=='1')

// 5
console.log('task 5:')
console.log(4>3)    //true
console.log(4>=3)   //true
console.log(4<3)    //false
console.log(4<=3)   //false
console.log(4==4)   //true
console.log(4===4)  //true
console.log(4!=4)   //false
console.log(4!==4)  //false
console.log(4!='4') //false
console.log(4=='4') //true
console.log(4==='4')//false
console.log('python'.length!='jargon'.length)

// 6
console.log('task 6:')
console.log(4>3 && 10<12)   //true
console.log(4>3 && 10>12)   //false
console.log(4>3 || 10<12)   //true
console.log(!(4>3))         //false
console.log(!(4<3))         //true
console.log(!(false))       //true
console.log(!(4>3 && 10<12))    //false
console.log(!(4>3 && 10>12))    //true
console.log(!(4==='4'))         //true
console.log('dragon'.indexOf('on')>=0&&'python'.indexOf('on')>=0)   //true

// 7
let today=new Date();
console.log(today.getFullYear())
console.log(today.getMonth()+1)
console.log(today.getDate())
console.log(today.getDay()+1)
console.log(today.getHours());
console.log(today.getMinutes())
console.log(today.getTime())
console.log(Date.now())

// Level 2

// 1
let base=prompt('Enter base of triangle: ');
let height=prompt('Enter height of triangle: ');
console.log(base);
console.log(height)
alert(`The area of triangle is ${1/2*base*height}`)

// 2
let a=prompt('Enter side a: ');
let b=prompt('Enter side b: ');
let c=prompt('Enter side c: ')
let p=+a + +b + +c
alert(`The perimeter of triangle is ${p}`)

// 3
let length=prompt('Enter length: ');
let width=prompt('Enter width: ')
alert(`Perimeter of rectangle: ${2*(+length + +width)}`)

// 4
let radius=prompt('Enter radius: ')
alert(`The area of a circle: ${3.14*(+radius)**2}`)
alert(`Circumference of a circle: ${2*3.14*(+radius)}`)

// 5: line 570-574

// 6
let hours=prompt('Enter hours :')
let rate=prompt('Enter rate per hours: ')
alert(`Your weekly earning is ${(+hours)*(+rate)}`)

// 7
let Name=prompt('Enter your name: ')
alert(Name.length>7?'long':'short')

// 8
let firstName='Asabeneh'
let lastName='Yetayeh'
alert(`Your first name, ${firstName} is ${firstName.length>lastName.length?'longer':'shorter'} than\
 your family name, ${lastName}`)

// 9
let myAge=250
let yourAge=19
alert(`I am ${myAge} ${myAge>yourAge?'older':'younger'}\
 than you`)

// 10
let tuoi=prompt('Enter birth year: ')
let nam=new Date()
let userAge=nam.getFullYear()-(+tuoi)
alert(`You are ${userAge}. ${userAge>=18?'\
You are old enough to drive':`\
You will be allowed to drive after ${18-userAge} \
${18-userAge>1?'years':'year'}`}`)

// 11
let tuoi2=prompt('Enter number of years you live: ')
alert(`You lived ${+tuoi *365*24*60*60} seconds`)

// 12
let g=new Date()
console.log(`${g.getFullYear()}--${g.getMonth()+1}--\
${g.getDate()} ${g.getHours()}:${g.getMinutes()}`)

console.log(`${g.getDate()}-${g.getMonth()+1}-\
${g.getFullYear()} ${g.getHours()}:${g.getMinutes()}`)

console.log(`${g.getFullYear()}\/${g.getMonth()+1}\/\
${g.getDate()} ${g.getHours()}:${g.getMinutes()}`)


// Level 3

// 1
console.log(`${g.getDate()<10?'0'+g.getDate():g.getDate()}\
-${g.getMonth()<10?'0'+(g.getMonth()+1):g.getMonth()+1}\
-${g.getFullYear()} ${g.getHours()<10?'0'+g.getHours():g.getHours()}\
:${g.getMinutes()<10?'0'+g.getMinutes():g.getMinutes()}`)




