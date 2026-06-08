const name = "Deepak yadav"
const repoCount = 160

console.log('hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String("hanuman ji")

console.log (gameName[5,6])
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0, 6)
console.log(newString)

const anotherString = gameName.slice(-5, 4)
console.log(anotherString)

const newstingOne = "   hanuman  "
console.log(newstingOne)
console.log(newstingOne.trim())


const URL ="https://ramayan.com/hanumanji%20jaishreeRam"
console.log(URL.replace('%20', '_'))

console.log(URL.includes('angad'))

console.log(gameName.split('-'))
