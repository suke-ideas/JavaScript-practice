// Day 06:26/05/2022
// Level 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1
console.log(1)
for (let i=0;i<=10;i++)
{
    console.log(i)
}

let i1=0;
while (i1<=10)
{
    console.log(i1++)
}

let i2=0
do 
{
    console.log(i2++)
} while (i2<=10)

// 2
console.log(2)
for (let i=10;i>=0;i--)
{
    console.log(i)
}

let i3=10
while (i3>=0)
{
    console.log(i3--)
}

let i4=10
do 
{
    console.log(i4--)
} while (i4>=0)

// 3
console.log(3)
// let n=prompt('Nhap n: ')
// for (let i=0;i<= +n;i++)
// {
//     console.log(i)
// }

// 4
console.log(4)
for (let i=1;i<=7;i++)
{
    let str=""
    for (let j=0;j<i;j++)
    {
        str+="#"
    }
    console.log(str)
}

// 5
console.log(5)
for (let i=0;i<=10;i++)
{
    console.log(`${i} x ${i} = ${i*i}`)
}

// 6
console.log(6)
console.log(`i\ti^2\ti^3`);
for (let i=0;i<=10;i++)
{
    console.log(`${i}\t${i**2}\t${i**3}`)
}

// 7
console.log(7)
for (let i=0;i<=100;i+=2)
{
    console.log(i)
}

// 8
console.log(8)
for (let i=1;i<=100;i+=2)
{
    console.log(i)
}

// 9
console.log("-------------9-------------")
for (let i=0;i<=100;i++)
{
    if (i<2) continue;
    let d=0
    for (let j=2;j<=Math.sqrt(i);j++)
    {
        if (i%j==0)
        {
            d++;
        }
    }
    if (d==0)
    {
        console.log(i)
    }
}

// 10
console.log('-------10----------')
let sum=0
for (let i=0;i<=100;i++)
{
    sum+=i;
}
console.log(sum)

// 11
console.log('-----------11-----------')
let sumE=0;
let sumO=0;
for (let i=0;i<=100;i++)
{
    if (i%2)
    {
        sumO+=i
    }
    else
    {
        sumE+=i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumE}\
. And the sum of all odds from 0 to 100 is ${sumO}`)

// 12
console.log("-------12-----")
let arr=[]
arr.push(sumE)
arr.push(sumO)
console.log(arr)

// 13
console.log("------13------")
let arr1=[]
for (let i=1;i<=5;i++)
{
    let num=i*Math.random()*225
    num=Math.ceil(num)
    arr1.push(num)
}
console.log(arr1)

// 14
console.log('------14------')
let id=""
let charM="ABCDEFGkjskfnkmsdjhnckk0123456789o^^%*$@#!%*TFSBmhedkk"
for (let i=1;i<=6;i++)
{
    let stt=Math.ceil(Math.random()*(charM.length-0))
    id+=`${charM[stt]}`
}
console.log(id)

// Level 2
// 1
console.log(1)
let id1=''
let n=Math.random()*(25-7)+7
n=Math.ceil(n)
for (let i=1;i<=n;i++)
{
    let stt=Math.floor(Math.random()*(charM.length-0))
    id1+=`${charM[stt]}`
}
console.log(id1)

// 2
console.log(2)
let id3="#"
let char="abcdefghjoplsdmkodujkmnjlklecdldfkjfks120567892460"
let n1=Math.random()*(6)+3
n=Math.ceil(n)
for (let i=1;i<=n1;i++)
{
    let stt=Math.floor(Math.random()*(char.length-0))
    id3+=`${char[stt]}`
}
console.log(id3)

// 3
console.log(3)
let newArr=[]
for (let i=0;i<countries.length;i++)
{
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

// 4
console.log(4)
let newA1=[]
for (let i=0;i<countries.length;i++)
{
    newA1.push(countries[i].length)
}
console.log(newA1)

// 5
console.log(5)
let newA2=[]
for (let i=0;i<countries.length;i++)
{
    let newA3=[]
    newA3.push(countries[i])
    let str='';
    for (let j=0;j<3;j++)
    {
        str+=countries[i][j].toUpperCase()
    }
    newA3.push(str)
    newA3.push(countries[i].length)
    newA2.push(newA3)
}
console.log(newA2)

// 6
console.log(6)
let A4=[]
for (let i=0;i<countries.length;i++)
{
    if (countries[i].includes('land'))
    {
        A4.push(countries[i])
    }
}

if (A4.length!=0)
{
    console.log(A4)
}
else
{
    console.log(`All these countries are without land`)
}

// 7
console.log(7)
let A5=[]
for (let i=0;i<countries.length;i++)
{
    if (countries[i].endsWith('ia'))
    {
        A5.push(countries[i])
    }
}

if (A5.length!=0)
{
    console.log(A5)
}
else
{
    console.log(`All these countries are without  ia`)
}

// 8
console.log(8)
let max=0
let count=''
for (let i=0;i<countries.length;i++)
{
    if (countries[i].length>max)
    {
        max=countries[i].length
        count=countries[i]
    }
}
console.log(count)

// 9
console.log(9)
let A6=[]
for (let i=0;i<countries.length;i++)
{
    if (countries[i].length==5)
    {
        A6.push(countries[i])
    }
}
console.log(A6)

// 10
console.log(10)
let maxS=''
let maxN=0;
for (let i=0;i<webTechs.length;i++)
{
    if (webTechs[i].length>maxN)
    {
        maxN=webTechs[i].length
        maxS=webTechs[i]
    }
}
console.log(maxS)

// 11
console.log(11)
let A7=[]
for (let i=0;i<webTechs.length;i++)
{
    let A8=[]
    A8.push(webTechs[i].toUpperCase())
    A8.push(webTechs[i].length)
    A7.push(A8)
}
console.log(A7)

// 12
console.log(12)
for (let s of webTechs)
{
    console.log(s)
}

// 13
console.log(13)
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for (let s1 of fullStack)
{
    for (let s2 of s1)
    {
        console.log(s2)
    }
}