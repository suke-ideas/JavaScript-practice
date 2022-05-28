// Day 08: 28/05/2022 : Objects

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  person.nationality = 'Ethiopian'
  person.country = 'Finland'
  person.title = 'teacher'
  person.skills.push('Meteor')
  person.skills.push('SasS')
  person.isMarried = true
  
  person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1)
      .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }
  console.log(person)
  console.log(person.getPersonInfo())

  const values = Object.values(person)
console.log(values)

const entries = Object.entries(person)
console.log(entries)

console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('score'))

// Túm lại là có mấy cái methods sau:
// 1. object.assign()
// 2. object.keys()
// 3. object.values()
// 4. object.entries()
// 5. object.hasOwnProperties()

// Level 1
console.log(1)
let dog={}
console.log(dog)

// 2
dog.name='Haku'
dog.legs=4
dog.color='black'
dog.age=2
dog.bark=function()
{
  return 'woof woof'
}

console.log(dog)
let key1=Object.keys(dog)
console.log(key1)
for (let i of key1)
{
  console.log(dog[i])
}

// Level 2
console.log('level 2')

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
let max1=0
let person1=''
// 1. Tìm người có nhiều kĩ năng
let key2=Object.keys(users)
for (let i of key2)
{
  if (users[i].skills.length>max1)
  {
    max1=users[i].skills.length;
    person1=i
  }
  console.log(`${i} : ${users[i].skills.length}`)

}
console.log(person1)

// 2. Đếm những người dùng >=50 points
let d1=0
for (let i of key2)
{
  if (users[i].points>=50)
  {
    d1++
  }
}
console.log(d1)

// 3. Đếm những người đã logged

let d2=0
for (let i of key2)
{
  if (users[i].isLoggedIn===true)
  {
    d2++
  }
}
console.log(d2)

// 4. Tìm những người MERN stack
for (let i of key2)
{
  if (users[i].skills.includes('MongoDB'))
  {
  if (users[i].skills.includes('Express'))
  {
  if (users[i].skills.includes('React'))
  {
  if (users[i].skills.includes('Node'))
  {
    console.log(i)
  }

  }

  }

  }
}

// 5
let Ngan=Object.assign({},users)
console.log(Ngan)
console.log(Object.keys(Ngan))
console.log(Object.values(Ngan))
console.log(Object.entries(Ngan))

// Level 3
console.log('level 3')
// 1
let personAccount={
  firstName: 'Bui Thi Thanh ',
  lastName: 'Ngan',
  incomes:0,
  idiom: 'No pain no gain'
}

console.log(personAccount)

// 2
const users1 = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]

 
