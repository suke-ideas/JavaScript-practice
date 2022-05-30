// Day 12: 29/05/2022 : 

let pattern = 'love'
let regEx = new RegExp(pattern)
console.log(regEx)
let flag = 'gi'
let regEx1 = new RegExp(pattern, flag)
console.log(regEx1)

let txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)




// Túm lại là
// 1. test() 
const str = 'I Love JavaScript'
const pattern1 = /love/gi
const result = pattern1.test(str)
console.log(result)


// 2. match() cho string trả về mảng
// - nếu không sài global nó sẽ trả về index, input, groups

// 3. search() cho string trả về index của tìm kiếm được

// 4. replace() dùng để thay thế tất cả các chuỗi con trong xâu bằng chuỗi mới

// 5. 

// \\:  uses to escape special characters
//   * \d mean: match where the string contains digits (numbers from 0-9)
//   * \D mean: match where the string does not contain digits
// * . : any character except new line character(\n)
// * ^: starts with
//   * r'^substring' eg r'^love', a sentence which starts with a word love
//   * r'[^abc] mean not a, not b, not c.
// * $: ends with
//   * r'substring$' eg r'love$', sentence ends with a word love
// * *: zero or more times
//   * r'[a]*' means a optional or it can occur many times.
// * +: one or more times
//   * r'[a]+' means at least once or more times
// * ?: zero or one times
//   *  r'[a]?' means zero times or once
// * \b: word bounder, matches with the beginning or ending of a word
// * {3}: Exactly 3 characters
// * {3,}: At least 3 characters
// * {3,8}: 3 to 8 characters
// * |: Either or
//   * r'apple|banana' mean either of an apple or a banana
// * (): Capture and group

const pattern2 = '[Aa]pple' // this square bracket means either A or a
const pattern3 = /[Aa]pple/g // this square bracket means either A or a

const txt1 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
let matches = txt1.match(pattern3)

console.log(matches)  

const pattern4 = /[a].+/g  // . any character, + any character one or more times 
const txt4 = 'Apple and banana are fruits'
const matches4 = txt4.match(pattern4)

console.log(matches4) 

const txt5 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern5 = /[Ee]-?mail/g  // ? means optional
matches5 = txt5.match(pattern5)

console.log(matches5)  // ["e-mail", "email", "Email", "E-mail"]

// 6. quantifier in regExp
 txt = 'This regular expression example was made in December 6,  2019.' 
 pattern = /\\b\w{4}\b/g  //  exactly four character words 
 matches = txt.match(pattern)
console.log(matches)  //['This', 'made', '2019']

 txt = 'This regular expression example was made in December 6,  2019.' 
 pattern = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
matches = txt.match(pattern)
console.log(matches)  //['This', 'made']

txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\d{4}/g  // a number and exactly four digits
matches = txt.match(pattern)
console.log(matches)  // ['2019']


txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\d{1,4}/g   // 1 to 4
matches = txt.match(pattern)
console.log(matches)  // ['6', '2019']

// 7. cart ^ : start with, trường hợp set character thì là negative

 txt = 'This regular expression example was made in December 6,  2019.'
 pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
 matches = txt.match(pattern)
console.log(matches)  // ["6", "2019"]

// Level 1
// 1
console.log('Level 1')
let arr='He earns 4000 euro from salary per month, 10000\
euro annual bonus, 5500 euro online courses per month.'
let digit=arr.match(/\d+/g)
console.log(digit)
let total= +digit[0]*12+ +digit[1]+ +digit[2]*12
console.log(total)

// 2
console.log(2)
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
let arr1=points.sort((a,b)=>{
    return +a - +b
})

console.log(arr1)
let distance=arr1[arr1.length-1]-arr1[0]
console.log(distance)

// 3
console.log(3)
// 1. bắt đầu bằng số là false
// 2. chứa kí tự đặc biệt là sai
let is_valid_var =function(str)
{
    let partern1=/^[0-9]/
    if (partern1.test(str))
    {
        return false
    }
    let partern2=/^[A-Z]/
    let partern3=/^_/
    let partern4=/^[a-z]/
    if (!partern2.test(str) && !partern3.test(str) && !partern4.test(str))
    {
        return false;
    }
    return true;
}
console.log(is_valid_var('firstname'))

// Level 2
console.log('Level 2')

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

// Level 3
console.log('Level 3')
// 1
console.log(1)

var name1='ngan';
var age1=19
var vd1=[]
let vd2={
    name: `${name1}`,
    age: 19
}
vd2.age++;
vd1.push(vd2)
console.log(vd1)

console.clear()
let text22='Tui là Bùi Thị  Thanh Ngân, hi, tui sinh ngày 22/05/2003\
hôm nay tui text vì lí do chạy chương trình kiểm thử hoi huhu :<\
abc xyz     %&&I% ^%&^^( %#%$&'
console.log(text22.match(/\b /g))


// Viết hàm đếm tần suất của các từ

const message = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(string) {
    return string.replace(/[.%&$@;,!?]/gi, '');
  }
  
  function countWords(string) {
    let wordCounts = {};
    let words = string.split(/[\b +]/);
  
    for (let i = 0; i < words.length; i++)
      wordCounts['_' + words[i]] = (wordCounts['_' + words[i]] || 0) + 1;
  
    return wordCounts;
  }
  
  
  

console.clear()

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
let words=paragraph.split(/[\b ]/)
for (let a of words)
{
   for (let i=0;i<a.length;i++)
   {

   }
}
console.log(words)
let count22=[]
for (let word22 of words)
{
    if (word22 == words[0])
    {
        let newW={word:`${word22}`,count:1}
        count22.push(newW)
    }
    else
    {
        let co=false
       for (let i of count22)
       {
           if (i.word==word22)
           {
               i.count++
               co=true
               break
           }
       }
       if (!co)
       {
        let newW={word:`${word22}`,count:1}
        count22.push(newW)
       }
    }
}
console.log(count22)
let tesst=countWords(paragraph)
console.log(tesst)

console.clear()

let cleaned = cleanText(paragraph);
  let count = countWords(cleaned)
  
  console.log(cleaned);
  console.log(count);
console.log(paragraph)