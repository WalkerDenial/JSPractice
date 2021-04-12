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
console.log(m.a)