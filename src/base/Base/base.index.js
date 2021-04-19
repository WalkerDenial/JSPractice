var test1 = "aaa";
var test1 = "bbb"; // var 修饰的变量可以多次声明
test1 = 123; // 数据类型可以改变

let test2 = "aaa";
// let test2 = "bbb" // 此处编译将不通过，不能对 let 修饰的属性二次声明
test2 = 123; // 可以在后续流程中更改数据类型

const test3 = "aaa";
// const test3 = "bbb" // 此处编译将不通过，不能对 const 修饰的属性二次声明
// test3 = 123 // 编译将不通过，const 修饰的数据无法再次修改结果
