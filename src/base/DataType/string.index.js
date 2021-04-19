/**
 * String 类型区域
 */
let str1 = "test1";
let str2 = str1;

console.log("str1 === str2 = " + str1 === str2);
str2 = "test2";
console.log("str1 === str2 = " + str1 === str2);

console.log('"1" + 2 + 3 = ' + ("1" + 2 + 3));
console.log('1 + 2 + "3" = ' + (1 + 2 + "3"));

/**
 * 效率方面
 */
// 字符串拼接法，效率会很低，对于大量字符串拼接，不建议使用
const testCount = 1000000;
function conbineString1() {
  let startTime = new Date().getTime();
  var str = "";
  for (let i = 0; i < testCount; i++) {
    str += "abcdefghijklmnopqrstuvwxyz";
  }
  let endTime = new Date().getTime();
  console.log("采用 + 的方式拼接字符串，耗时为：" + (endTime - startTime));
}

conbineString1();

function conbineString2() {
  let startTime = new Date().getTime();
  var str = [];
  for (let i = 0; i < testCount; i++) {
    str[i] = "abcdefghijklmnopqrstuvwxyz";
  }
  let endTime = new Date().getTime();
  console.log("采用数组的方式拼接字符串，耗时为：" + (endTime - startTime));
}

conbineString2();
