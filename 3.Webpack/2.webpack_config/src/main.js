// 1.使用 CommonJS 的模块化规范
const {add, mul} = require('./math')
console.log(add(20, 30))
console.log(mul(20, 30))

// 2.使用 ES6 的模块化规范
import {name, age} from "./info";
console.log(name)
console.log(age)
