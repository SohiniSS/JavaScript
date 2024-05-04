// const name = "user"
// const userAccount = 4532

// console.log(`Hi, This is ${name} and my account number is ${userAccount}.`)

const gameName = new String("Coderunner")

/*[[Prototype]]
: 
String
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]() */
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf(`e`))
// const newName = "practice@Test"
// console.log(newName.substring(0,4))
// console.log(newName.slice(-8, -2))
// console.log(newName.replace('@',"-"))
// console.log(newName.length)
// console.log(newName.includes("tressure"))
// console.log(newName.split('@'))


// Create a var that stores the name that user enter via prompt//
//Capitallize the first letter to the name//
// Use the capitalize version to greet them using the alert//
/* How to capitalize the first cahracter if the name
step 1. isolate the first char
step 2. change it to uppercase
step 3. isolate the rest of the name
step 4. concatenate first char with rest of the char */
const charName = "aGTyui"
// step 1.
var firstchar = charName.substring(0,1)
// step 2.
var uppercaseName = firstchar.toUpperCase()
// console.log(uppercaseName)
// step 3. substep: change rest of the name into lower case
var restofName = charName.slice(1, charName.length)
restofName = restofName.toLowerCase()
// console.log(restofName)
// step 4.
var concatName = uppercaseName + restofName;
// console.log(concatName)
console.log(`What is your name?\n Hello ${concatName}.`)
console.log(5);