// Day 11: 28/05/2022 : Destructuring and Spreading
// Túm lại là
// 1. sử dụng [x,y,z]=names=[1,2,3]
// 2. sử dụng dấu , để bỏ qua những giá trị
// 3. sử dụng mảng ...rest để lấy những giá trị sau lưu vào mảng nếu quá nhiều
// 4. renaming during structuring 
const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width: w, height: h, area: a, perimeter: p } = rectangle
  
  console.log(w, h, a, p)

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }

  const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
      obj.age
    } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }
  
  console.log(getPersonInfo(person))

// Level 1
console.log("level 1")

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle1 = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// 1
console.log(1)
let [e,pi,gravity,humanBodyTemp,waterBoilingTemp]=constants
console.log(constants)
console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp)

// 2
console.log(2)
let [fin,est,sw,den,nor]=countries
console.log(countries)
console.log(fin,est,sw,den,nor)

// 3
console.log(3)
let {width,height,area,perimeter}=rectangle1
console.log(rectangle1)
console.log(width,height,area,perimeter)

// Level 2
console.log('Level 2')
for (let {name,scores,skills,age} of users)
{
    console.log(name,scores,skills,age)
}

console.log("Tìm những người có ít hơn 2 kĩ năng")
for (let {name,scores,skills,age} of users)
{
    if (skills.length<2)
    {
        console.log(name,scores,skills,age)
    }
}

// Level 3
console.log('Level 3')

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name,skills,[,,jsScore,reactScore]]=student

console.log(name,skills,jsScore,reactScore)

// 3
console.log(3)

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

let convertArrayToObject= ([name,skills,scores]) =>{
    {
        return {
            name: name,
            skills: skills,
            scores: scores
        }

    }
}
console.log(convertArrayToObject(students))
