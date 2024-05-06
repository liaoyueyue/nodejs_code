const username = "zhangsan";
const age = 20;

// 向 module.exports 对象上挂载属性
module.exports.username = username;
module.exports.age = age;

// 向 module.exports 对象上挂载 sayHello 方法
module.exports.sayHello = function () {
  console.log("Hello, I am Zhang San");
};

// 在一个自定义模块中，默认情况下， module.exports = {}
// 让 module.exports 指向一个全新的对象
// module.exports = {
//   nickname: "小黑",
//   sayHi() {
//     console.log("Hi!");
//   },
// };
