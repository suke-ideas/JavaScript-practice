// 22/05/2022

// Level 1

let challenge="30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0,2));
console.log(challenge.substring(0,2))
console.log(challenge.substring(3))
console.log(challenge.substr(3))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(' '))
let string='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(','));
console.log(challenge.replace('JavaScript','Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge.indexOf('J')))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log(challenge.length)
let s='You cannot end a sentence with because because because is a conjunction'
console.log(s.indexOf("because"))
console.log(s.search("because"))
console.log(s.lastIndexOf('because'))
let s1='    30 days of JavaScript      ';
console.log(s1.trim());
console.log(s1)
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('pt'))
console.log(challenge.match(/a/g))
let s2='a';
console.log(challenge.match(s2))
let s3='30 Days of';
console.log(s3.concat('JavaScript'))
console.log(challenge.repeat(2))

// Level 2

// 1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting\
 people up. \' by John Holmes teaches us to help one another.')

// 2
console.log('\"Love is not patronizing and charity isn\'t \
about pity, it is about love. Charity and love are the same\
 -- with charity you give love, so don\'t just give money\
  but reach out your hand instead.\"')

// 3
let x='10'
console.log(x===10)
console.log(10===parseInt(x))
console.log(10===Number(x))
console.log(10===+x)

// 4
console.log(parseFloat('9.8')===10)
console.log(10===parseInt(parseFloat('9.8')))
console.log(parseInt(parseFloat('9.8')))
let y=parseFloat('9.8')
console.log(Math.ceil(y))
console.log(10===Math.ceil(y))

// 5
console.log("python".includes('on') && "jargon".includes('on'))

// 6
let z='I hope this course in both python and jargon'
console.log(z.includes('jargon'))

// 7
let m=Math.random()
console.log(m)
let n=m*100
console.log(Math.round(n))

// 8
let p=Math.random()*(100-50+1)+50
console.log(Math.floor(p))

// 9
let q=Math.random()*(255-0+1) +0
console.log(Math.floor(q))

// 10
let s4='JavaScript'
let r=Math.floor(Math.random()*(s4.length-1-0)+0)
console.log(r)
console.log(s4.charAt(r))

// 11
console.log('1 1 1 1 1\n\
2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n\
5 1 5 25 125\n')

// 12
let str='You cannot end a sentence with because \
because because is a conjunction';
console.log(str.substr(str.indexOf('because'),str.lastIndexOf('because')-str.indexOf('because')+'because'.length))

// Level 3

// 1
let x1='Love is the best thing in the world. Some found their love and some\
 are still looking for their love';
console.log(x1)
console.log(x1.match(/love/g))

// 2
console.log(str.match(/because/g))

// 3
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/%|@|\$|&|#|/g,''))
sentence=sentence.replace(/%|@|\$|&|#|/g,'')
console.log(sentence)


// 4
let s5='He earns 5000 euro from salary per month, 10000 euro\
anual bonus, 15000 euro online courses per month'
console.log(s5)

let digit=s5.match(/\d+/g)
console.log(digit)
let total=Number(digit[0])*12+Number(digit[1]) +Number(digit[2]*12)
console.log(total)
