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

