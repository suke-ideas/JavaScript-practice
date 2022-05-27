// Day 07: 27/05/2022 : Functions

// Level 1
// 1
console.log(1)
let fullName=function()
{
    console.log("Thanh Ngan")
}
fullName()

// 2
console.log(2)
let fullName2= function(fName,lName)
{
    console.log(`${fName} ${lName}`)
}

fullName2('Bui Thi Thanh','Ngan')

// 3
console.log(3)
let addNum=function(a,b){
    return a+b
}

console.log(addNum(22,5))

// 4
console.log(4)
let area = function(a,b){
    return a*b
}
console.log(area(10,20))

// 5
console.log(5)
let sHCN=function(a,b)
{
    console.log(2*(a+b))
}
sHCN(22,5)

// 6
console.log(6)
let V1=function(w,l,h)
{
    console.log(w*h*l)
}
V1(1,2,3)

// 7
console.log(7)
let sHT=function(r)
{
    console.log(Math.PI*r*r)
}
sHT(10)

// 8
console.log(8)
let cHT=function(r){
    console.log(2*Math.PI*r)
}
cHT(10)

// 9
console.log(9)
let bmi=function(weight,height)
{
    let BMI=weight/(height**2)
    if (BMI<18.5)
    {
        console.log('underweight')
    }
    else
    {
        if (BMI<24.9)
        {
            console.log('normal weight')
        }
        else
        {
            if (BMI<29.9)
            {
                console.log('over weight')
            }
            else
            {
                console.log('obese')
            }
        }
    }
}
bmi(45,1.58)

// 10
console.log(10)
let checkSeason=function(month)
{
    switch (month)
    {
        case 1:
        case 2:
        case 3:
            console.log('spring')
            break;
        case 4:
        case 5:
        case 6:
            console.log('summer')
            break;
        case 7:
        case 8:
        case 9:
            console.log('autumn')
            break;
        default:
            console.log('winter')
            break;
    }
}

checkSeason(5)

// 11
console.log(11)
let findMax=function(a,b,c)
{
    let max=a;
    if (max<b)
    {
        max=b
    }
    if (max<c)
    {
        max=c
    }
    return max
}
console.log(findMax(22,5,2003))

// Level 2
console.log('level 2')
// 1
let solvedE=function(a,b,c)
{
    if (a==0 && b==0 && c!=0)
    {
        console.log('Vo nghiem')
    }
    else
    {
        if (a==0 && b==0 && c==0)
        {
            console.log('Vo so nghiem')
        }
        else
        {
            console.log(`x = ${-b/a}`)
        }
    }
}

// 2
console.log(2)
let printA=function(arr)
{
    for (let i of arr)
    {
        console.log(i)
    }
}

printA(['Bui Thi Thanh Ngan', '22/05/2003',21120505])

// 3
console.log(3)
let showDataTime=function()
{
    let time=new Date()
    let d=time.getDate()
    let m=time.getMonth()
    let y=time.getFullYear()
    let h=time.getHours()
    let min=time.getMinutes()
    console.log(`${d<10?`0${d}`:d}/${m<10?`0${m}`:m}/${y} ${h<10?`0${h}`:h}:${min<10?`0${min}`:min}`)
}
showDataTime()

// 4
console.log(4)
let swap=function(a,b)
{
    let temp=a;
    a=b;
    b=temp
    console.log(a,b)
}
a=22
b=5;
swap(a,b)

// 5
console.log(5)
let reverse=function(arr)
{
    let arrN=[]
    for (let i=arr.length-1;i>=0;i--)
    {
        arrN.push(arr[i])
    }
    console.log(arrN)
}
reverse([1,2,3,5,6,8])

// 6
console.log(6)
let capli=function(arr){
    for (let i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].toUpperCase()
    }
    console.log(arr)
}
capli(['Bui Thi Thanh Ngan','hihi'])

// 7
console.log(7)
let add1=function(arr,item)
{
    arr.push(item)
    console.log(arr)
}

add1(['Thanh Ngan',22,5],2003)

// 8
console.log(8)
let add2=function(arr,idex)
{
    arr.splice(idex,1)
    console.log(arr)
}

add2(['Thanh Ngan',22,5,2003],3)

// 9
console.log(9)
let sum1=function(number)
{
    let sum=0
    for (let i=1;i<=number;i++)
    {
        sum+=i;
    }
    console.log(sum)
}

sum1(22)

// 10
console.log(10)
let sum2=function()
{
    let sum=0
    for (let i of arguments)
    {
        sum+=i;
    }
    console.log(sum)
}
sum2(22,5,2003)

// 11
console.log(11)
let sum3=function(arg)
{
    let sum=0
    for (let i=0;i<=arg;i++)
    {
        if (i%2)
        {
            sum+=i
        }

    }
    console.log(sum)
}
sum3(22)

// 12
console.log(12)
let sum4=function(arg)
{
    let sum=0
    for (let i=0;i<=arg;i++)
    {
        if (i%2==0)
        {
            sum+=i
        }

    }
    console.log(sum)
}
sum4(22)