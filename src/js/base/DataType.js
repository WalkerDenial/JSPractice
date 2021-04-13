function baseTest() {
    // console.log(3 / 2) // 除了BigInt，其余全是双精度浮点型数据类型
    // console.log(010)
    // console.log(parseInt("010"))
    // console.log(+ "010") // 此处还是会按照 10 进制进行处理，而不是 8 进制
    // console.log(+ "0x10")

    let str1 = "test1"
    let str2 = str1
    console.log(str1 === str2)
    str2 = "test2"
    console.log(str1 === str2)

    console.log("1" + 2 + 3)
    console.log(1 + 2 + "3")
}

// baseTest()

const m = {
    a: 1,
    b: 2
}
function foo(arg) {
    arg.a = 20;
}
foo(m)
console.log(m.a);

console.log(1 << 3);

// 自执行函数
(function() {
    // ...
})();
+function() {}()
!function() {}()

let name = "aaa"
// let name = "bbb" // 此处编译将不通过，不能对 let 修饰的属性二次声明

var name1 = "aaa"
var name1 = "bbb" // 此处可以

const name2 = "aaa"
const name2 = "bbb" // 此处编译将不通过，不能二次声明