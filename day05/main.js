// Day 05: 24/05/2022

// Level 1
// 1
let m1=[]
let m2=new Array()
const m3=Array()
console.log(m1,m2,m3)

// 2
let m4=[22,5,2003,2112,0505]
console.log(m4)

// 3
console.log(m4.length)

// 4
console.log(m4[0],m4[m4.length-1])
console.log(m4[Math.ceil((m4.length-1)/2)])

// 5
let mixedDataTypes=['fullName',{birthday: 22,id:21120505},[22,05,2003],37]
console.log(mixedDataTypes)
console.log(mixedDataTypes.length)
console.log(mixedDataTypes[1])

// 6
let itCompanies=['FaceBook','Google', 'Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length-1])
console.log(itCompanies[(itCompanies.length-1)/2])
let s1=itCompanies.toString()
console.log(s1)
let s2=s1.split(',')
console.log(s2)

// 11
for (let i in itCompanies)
{
    console.log(itCompanies[i].toUpperCase())
}

// 12
console.log(`${itCompanies.join(', ')} are big IT companies`)
console.log(itCompanies.join('-'))

// 13
// Tách mảng thành xâu thêm các kí tự bằng lệnh join
console.log(itCompanies.join(' *** '))

//  Kiểm tra một phần tử có trong mảng không ?

// Cách 1: sài include
console.log(itCompanies.includes('Apple'))

// Cách 2: sài indexof
console.log(itCompanies.indexOf('IBM'))

// Cách 3: sài loop
for (let i=0;i<itCompanies.length;i++)
{
    if (itCompanies[i]=='Apple')
    {
        console.log(true)
    }
}

// 14
for (let i=0;i<itCompanies.length;i++)
{
    let count=0;
    let word=itCompanies[i]
    for (let j=0;j<word.length ;j++)
    {
        if (word[j]=='o')
        {
            count++;
        }
    }
    if (count>1)
    {
        console.log(word)
    }
}

// 15 : sắp xếp mảng sử dụng sort
console.log(itCompanies.sort())

// 16 : Đảo mảng sử dụng reverse
console.log(itCompanies.reverse())

// 17 : 
console.log(17)

//  khi sử dụng let M=itcompanies thì khi đó M sẽ như con trỏ trỏ đến itCompanies nên khi ta tách bằng splice thì itCompanies cũng thay đổi
// dưới đây là ví dụ:
let m6=itCompanies
console.log('Đây là ví dụ về splice:')
console.log(m6.splice(0,3)) 
console.log(m6)
console.log(itCompanies)

// Cách khác: sao chép mảng gốc bằng concat
let m7=[]
m7=m7.concat(itCompanies)
console.log(m7)
console.log(itCompanies)
console.log(m7.splice(0,3))
console.log(itCompanies)

// 18
console.log(18)
let m8=[].concat(itCompanies)
console.log(m8.splice(m8.length-3,m8.length))

// 19
console.log(19)
let m9=[].concat(itCompanies)
let idm=(m9.length-1)/2
idm=Math.ceil(idm)
console.log(m9)
console.log(m9.splice(idm,1))
console.log(m9)

// 20
console.log(20)
console.log(itCompanies.shift())
itCompanies.unshift('Oracle')
console.log(itCompanies)

// 21
console.log(21)
console.log(itCompanies.splice((itCompanies.length-1)/2,1))
console.log(itCompanies)

// 22
console.log(22)
console.log(itCompanies.pop())
console.log(itCompanies)

// 23
console.log(23)
console.log(itCompanies.splice(0))
console.log(itCompanies)

// Level 2

// 1
console.log('Level 2')
console.log(1)
let m10='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
for (let i=0;i<m10.length;i++)
{
    if (m10[i]=='.' || m10[i]==',')
    {
        m10.slice(i,i+1)
        console.log(true)
        console.log(m10)
    }
}
console.log(m10)

let hic='huhu đúng đi mà, năn nỉ, huhu.'
console.log(hic)
hic=hic.split('.')
hic=hic.toString()
hic=hic.split(',')
console.log(hic)

// 2
console.log(2)
const shop=['Milk','Coffee','Tea','Honey']
if (shop.includes('Meat')==false)
{
    shop.unshift('Meat')
}
console.log(shop)
if (shop.includes('Sugar')==false)
{
    shop.push('Sugar')
}
console.log(shop)
for (let i=0;i<shop.length;i++)
{
    if (shop[i]=='Honey')
    {
        shop.splice(i,1)
    }
}
console.log(shop)

for (let i=0;i<shop.length;i++)
{
    if (shop[i]=='Tea')
    {
        shop[i]='Green Tea'
    }
}
console.log(shop)

// 3
console.log(3)
const countries=[ 
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
'Kenya']

console.log(countries)
if (countries.includes('Ethiopia')==false)
{
    countries.push('Ethiopia')
}
else
{
    console.log('ETHIOPIA')
}
console.log(countries)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
console.log(webTechs)

if (webTechs.includes('Sass')==true)
{
    console.log('Sass is a CSS preprocess')
}
else
{
    webTechs.push('Sass')
}
console.log(webTechs)

// 4
console.log(4)
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack=[...frontEnd,...backEnd]
console.log(fullStack)
let v1=frontEnd.concat(backEnd)
console.log(v1)

// Level 3
console.log('Level 3')
console.log(1)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages)
console.log(ages.sort())
console.log(ages[0])
console.log(ages[ages.length-1])
console.log(ages[Math.ceil((ages.length-1)/2)])
let sum=0
for (let i=0;i<ages.length;i++)
{
    sum+=ages[i]
}
console.log(Math.ceil(sum/ages.length))
console.log(`${ages[0]}-${ages[ages.length-1]}`)
console.log(`distance min-avg: ${Math.abs(ages[0]-Math.ceil(sum/(ages.length-1)))}`)

const countries2 = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
let cop=[].concat(countries2)
console.log(countries2.length)
let tenCountry=cop.splice(0,10)
console.log(tenCountry)
console.log(countries2)

console.log(countries2[Math.ceil((countries2.length-1)/2)])
for (let i=0;i<countries2.length;i++)
{
    if (countries2[i]=='Lesotho')
    {
        console.log(i)
    }
}

if (countries2.length%2==0)
{
    let cop1=countries2.splice(0,countries2.length/2)
    console.log(cop1)
    console.log(countries2)
    console.log(cop1.length)
    console.log(countries2.length)
}
else
{
    let cop1=countries2.splice(0,Math.ceil(countries2.length/2))
    console.log(cop1)
    console.log(countries2)
    console.log(cop1.length)
    console.log(countries2.length)
}

// 1
console.log('finish')
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let d=0;
let hi=text.split(' ')
for (let i=0;i<hi.length;i++)
{
    if (hi[i].includes(',') || hi[i].includes('.'))
    {
        console.log(hi[i].split('.'))
    }
}
console.log(hi)

