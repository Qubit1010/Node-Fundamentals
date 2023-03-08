// importing files from node js core module
// const fs = require("fs");
// creates a new file and add content to it.
// fs.writeFileSync("notes.txt", "This file was created by Node.js....");
// added more content to existing file.
// fs.appendFileSync("notes.txt", " New text added!");

const Name = "Aleem";

// Importing our files - Local Modules
require("./utlis");
// const add = require('./utlis')
// const Name2 = require('./utlis')
// const sub = require('./local_module')
// Importing our files - Local Modules via different methods
// const add2 = require('./math')
// const math = require('./math')

// const sum = add(5, 5)
// const sum2 = add2(5, 5)
// const subs = sub(2, 4)

// console.log(subs)
// console.log(sum)

// console.log(math.add(1, 3))

// Importing json data
const data = require("./data.json");
// console.log(data)

// path module
const path = require("node:path");

// console.log(__filename)
// console.log(__dirname)
// console.log('----------')
// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
// console.log('----------')
// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))
// console.log('----------')
// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__filename)))
// console.log('----------')
// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute('./data.json'))

// Path join method
// console.log(path.join("folder1", "folder2", "index.html"))
// console.log(path.join("/folder1", "folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "../index.html"))
// console.log(path.join(__dirname, "data.json"))

// Path resolve method
// console.log(path.resolve("folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "../index.html"))
// console.log(path.resolve(__dirname, "data.json"))

// Callback Function
// function greet(name) {
//   console.log(`Hello${name}`);
// }

// function higherOrderFunction(callback) {
//   const name = "Vishwas";
//   callback(name);
// }

// higherOrderFunction(greet)

// Event module

// const PizzaShop = require("./pizza-shop")
// const DrinkMachine = require("./drink-machine")

// const pizzaShop = new PizzaShop()
// const drinkMachine = new DrinkMachine()

// pizzaShop.on("order", (size, topping) => {
//   console.log(`Order received! Baking a ${size} pizza with ${topping}`)
//   drinkMachine.serveDrink(size)
// })

// pizzaShop.order('large', 'mushrooms');
// pizzaShop.displayOrderNumber();

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(`Order received! Baking a ${size} pizza with ${topping}`);
// });

// emitter.on("order-pizza", (size) => {
//   if (size === 'large') {
//     console.log(`Serving complementary drink`);
//   }
// });

// console.log("HEE")
// emitter.emit("order-pizza", "large", "mushrooms");

// Buffer Method
// const buffer = new Buffer.from('Vishwas', 'utf-8')

// buffer.write("Code");
// buffer.write("Codededdd");

// console.log(buffer)
// console.log(buffer.toString())
// console.log(buffer.toJSON())

const fs = require("node:fs");
// reads the content of a file.
// const fileContents = fs.readFileSync("./file.txt")
const fileContents = fs.readFileSync("./file.txt", "utf-8")
console.log(fileContents)
// async file read method
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if(error){
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// })
// creates a new file and add content to it.
// fs.writeFileSync("notes.txt", "This file was created by Node.js....");
// async file write method
// fs.writeFile("./notes.txt", "NM", { flag: "a"}, (err) => {
//   if(err){
//     console.log(err);
//   } else {
//     console.log("File Written");
//   }
// })
// added more content to existing file.
// fs.appendFileSync("notes.txt", " New text added!");

// File Systen via promises
// const fs = require("node:fs/promises");
// reads the content of a file.
// fs.readFile("./file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// via async await
// async function readFile(){
//   try {
//     const data = await fs.readFile("file.txt", "utf-8")
//     console.log(data)
//   } catch (err) {
//     console.log(err)
//   }
// }

// readFile()