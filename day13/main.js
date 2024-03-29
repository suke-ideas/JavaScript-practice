// Day 13: 29/05/2022 : Console Object Methods

console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text

console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

console.error('This is an error message')
console.error('We all make mistakes')

let names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

let user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(user)

  let countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

  let users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users)

   countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')

  console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // 

for (let i = 0; i <= 10; i += 1) {
    let errorMessage = `${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
  }

  names = ['Asabeneh', 'Brook', 'David', 'John']
  countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
   users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  
  console.group('Names')
  console.log(names)
  console.groupEnd()
  
  console.group('Countries')
  console.log(countries)
  console.groupEnd()
  
  console.group('Users')
  console.log(user)
  console.log(users)
  console.groupEnd()

  const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()

  console.clear()


// túm lại là
// 1. console.log()
// 2. console.warn()
// 3. console.error()
// 4. console.table()
// 5. console.time() -> console.timeEnd()
// 6. console.info() giống console.log()
// 7. console.assert()
// 8. console.group() -> console.groupEnd()
// 9. console.count()
// 10. console.clear()

// Level 1
console.log('Level 1')
// 1
console.log(countries)
console.table(countries)

// Level 2
console.log('Level 2')
console.assert(10<2,"false rồi")
console.warn('sai rồi')
console.error("gần xong rồi")

// Level 3
console.time('Time for while: ')
let i=0
while (i<5){
    i++
}
console.timeEnd('Time for while: ')

console.time('Time for for: ')
for (let i=0;i<5;i++)
{

}
console.timeEnd('Time for for: ')

console.time('Time for for of: ')
for (let i of [0,1,2,3,4])
{

}
console.timeEnd('Time for for of: ')

let arr5=[0,1,2,3,4]
console.time('Time for forEach: ')
arr5.forEach((i)=>{

})
console.timeEnd('Time for forEach: ')
