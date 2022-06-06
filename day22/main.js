// Day 22: 6/6/2022:  Manipulating DOM object


// ## Exercises

// ### Exercises: Level 1

// 1. Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div. 
//    - Even numbers background is green
//    - Odd numbers background is yellow
//    - Prime numbers background is red

// ![Number Generator](./../images/projects/dom_min_project_day_number_generators_2.1.png)

// ### Exercises: Level 2

// 1. Use the countries array to display all the countries.See the design

// ![World Countries List](./../images/projects/dom_min_project_countries_aray_day_2.2.png)

// ### Exercises: Level 3

// Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. 
// The drop down button has been created using [*details*](https://www.w3schools.com/tags/tag_details.asp) HTML element.

let container = document.createElement('div')
console.log(container)
document.body.appendChild(container)

let textInner = ''
let li
let div = document.querySelector('div')
console.log(div)
for (let i = 0; i<102; i++) {
    li = document.createElement('li');
    li.innerText = i;

    function snt(value) {
        if (value == 1) return false
        for (let i = 2; i <= Math.sqrt(value) ;i++) {
            if (value % i ==0)
            {
                return false;
            }
        }
        return true;
    }
    li.style.listStyle = 'none'
    li.style.display = 'inline-block'
    li.style.marginRight = '8px'
    li.style.marginBottom = '8px'

    li.style.width = '20px'
    li.style.height = '20px'


    if (snt(i)){
        li.style.backgroundColor = 'red'
    } else
    if (i%2 ==0)
    {
        li.style.backgroundColor = 'green';
    }
    else
    {
        li.style.backgroundColor = 'yellow'
    }
    // div.innerHTML += `${li}`
    // document.body.appendChild(li)
    div.appendChild(li)
    // textInner += `${li}`
}
// container.innerHTML = textInner
console.log(container)

// Level 2:
const countries = [
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
let level2 = document.createElement('div')
document.body.appendChild(level2)
let div2 = document.querySelector('div')
let h1 = document.createElement('h1')
h1.innerText = 'Countries'
div.appendChild(h1)
countries.forEach((country, id) => {
    let box = document.createElement('box')
    box.style.backgroundColor = '#ccc';
    box.innerText = country
    div.appendChild(box)
    box.style.display = 'inline-block'
    box.style.marginRight = '8px'
    box.style.marginBottom = '8px'
})


