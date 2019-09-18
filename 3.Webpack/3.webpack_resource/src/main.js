// 1.使用 CommonJS 的模块化规范
const {add, mul} = require('./js/math')
console.log(add(20, 30))
console.log(mul(20, 30))

// 2.使用 ES6 的模块化规范
import {name, age} from "./js/info";
console.log(name)
console.log(age)

// 3.依赖 css 文件
require('./css/normal.css')

// 4. 依赖 less 文件
require('./css/special.less')