// premitive data type
// there are 7 types of premitive data types: String, number, Boolearn, null, undefined, symbol, BigInt

const score = 100
const marks = 52.20
let userEmail;
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId)

// Non premitive data type: Array, Objects, Functions



//stack( primetive), heap (non premitive)

let myYoutube = "Deepak"

let secondname = myYoutube
secondname = "yadav"

console.log(myYoutube)
console.log(secondname)

let userone = {
    email: "yadav@ahir.com",
    upi: "user@ybl"
}

let userTwo = userone
userTwo.email= "yadavd@com"

console.log(userone.email);
console.log(userTwo.email);