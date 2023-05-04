const fs = require('fs')
// const book = {
//   title: "Dark Hour",
//   author: "Riks Showl"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
 
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString() 
// const data = JSON.parse(dataJSON)
// console.log(data.title)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString() 
const data = JSON.parse(dataJSON)

data.name = "Aleem"
data.planet = "ZK12"
data.age = 22
console.log(data)

const myDataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', myDataJSON)