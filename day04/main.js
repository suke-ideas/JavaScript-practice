// Day 04: 24/05/2022

// Level 1
// 1
let age=prompt('Enter your age: ')
if (age>=18)
{
    alert('You are old enough to drive')
}
else
{
    alert(`you are left with ${18- +age} years to drive`)
}

// 2
let myAge=19
let yourAge=prompt('Enter your age: ')
switch(true)
{
    case yourAge==myAge:
        alert('You are the same age with me');
        break;
    case yourAge>myAge:
        alert(`You are ${+yourAge-myAge} older than me`)
        break;
    case yourAge<myAge:
        alert(`I am ${myAge- +yourAge} older than you`)
        break
}

// 3
let a1=4
let b=7
if (a>b)
{
    console.log(`${a} is greater than ${b}`)
}
else
{
    console.log(`${a} is less than ${b}`)
}

console.log(a>b?`${a} is greater than ${b}`
:`${a} is less than ${b}`)

4
let a=prompt('Enter a number: ')
alert(+a %2==0?`${a} is an even number`:`\
${a} is an odd number`)

//  Level 2
// 1
let score=prompt('Enter your score: ')
if (+score>=80 && +score<=100)
{
    console.log('A')
}
else
{
    if (+score>=70 && +score<=89)
    {
        console.log('B')
    }
    else
    {
        if (+score>=60 && +score<=69)
        {
            console.log('C')
        }
        else
        {
            if(+score>=50 && +score<=59)
            {
                console.log('D')
            }
            else
            {
                console.log('F')
            }
        }
    }
}

switch(score.toUpperCase())
{
    case 'A':
        console.log('80-100')
        break
    case 'B':
        console.log('70-89')
        break
    case 'C':
        console.log('60-69')
        break
    case 'D':
        console.log('50-59')
        break
    case 'F':
        console.log('0-49')
        break
}

// 2
let season=prompt('Enter month: ')
switch(season.toLowerCase())
{
    case 'september':
    case 'october':
    case 'november':
        console.log(`The ${season} is Autumn`)
        break
    case 'december':
    case 'january':
    case 'february':
        console.log(`The ${season} is Winter`)
        break
    case 'march':
    case 'april':
    case 'may':
        console.log(`The ${season} is Spring`)
        break
    case 'june':
    case 'jully':
    case 'august':
        console.log(`The ${season} is Summer`)
        break
}

// 3
let check=prompt('What is the day today? ')
switch(check.toLowerCase())
{
    case 'saturday':
    case 'sunday':
        console.log(`${check} is a weekend`)
        break
    default:
        console.log(`${check} is a working day`)
        break
}

// 4
let count=prompt('Enter a month: ')
switch(count.toLowerCase())
{
    case 'february':
        console.log(`${count} has 28 days`)
        break
    case 'january':
    case 'march':
    case 'may':
    case 'jully':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${count} has 31 days`)
        break
    default:
        console.log(`${count} has 30 days`)
        break
}

