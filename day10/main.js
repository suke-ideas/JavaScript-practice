// Day 10: 28/05/2022 : Sets and Maps

const companies = new Set()
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)

  const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)
  for (const country of map) {
    console.log(country)
  }
  for (const [country, city] of map){
    console.log(country, city)
   }

// Túm lại là bài này có mấy hàm
// 1. Set()
// - thêm phần tử vào set: .add
// - xóa phần tử của set: .delete
// - kiểm tra một phần tử có tồn tại không .has
// - xóa tất cả phần tử từ set .clear()
// - lọc ra những số mà trong hai set đều có sử dụng filter

// 2. Map()
// - thêm phần tử vào map sử dụng set
// - lấy giá trị từ 1 map sử dụng get
// - kiểm tra một key có tồn tại trong map không, sử dụng has

// Level 1


const countries1 = ['Finland', 'Sweden', 'Norway']

// 1
let task1=new Set()
console.log(task1)

// 2
for (let i=0;i<=10;i++)
{
  task1.add(i)
}
console.log(task1)

// 3
task1.delete(5)
console.log(task1)

// 4
task1.clear()
console.log(task1)

// 5
let s1=['Bui','Thi','Thanh','Ngân','Hihi','hehe','haha']
let task2=new Set(s1)
console.log(task2)

task2.clear()
for (let i=0;i<5;i++)
{
  task2.add(s1[i])
}
console.log(task2)

// 6
let task3=new Map()
console.log(task3)
for (let i of countries1)
{
  task3.set(i,i.length)
}
console.log(task3)

// Level 2
console.log('Level 2')
// 1
const a = [4, 5, 8, 9,1,3,5]
const b = [3, 4, 5, 7]
let c=[...a,...b]
let B =new Set(b)
let A=new Set(a)
let task4=new Set(c)
console.log(task4)

// 2
let task5=a.filter((i)=>{
  return ! B.has(i)
})
console.log(task5)

// Level 3

