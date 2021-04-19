/**
 * Number 类型区域
 */
console.log("3 / 2 = " + 3 / 2); // 除了BigInt，其余数值类型全是双精度浮点型
console.log("Math.floor(3 / 2) = " + Math.floor(3 / 2)); // 通过 Math 内置函数，才能取得对应的实际整型数据

console.log("8 进制数据表示：010 = " + 010); // 8 进制数据输出
console.log("16 进制数据表示：0x10 = " + 0x10); // 16 进制数据输出

console.log("parseInt('010') = " + parseInt("010")); // parseInt 会将 010 按照十进制数据进行处理
console.log("parseInt('0x10') = " + parseInt("0x10")); // parseInt 会将 0x10 按照十六进制数据进行处理

console.log("+ '010 = " + +"010"); // 此处还是会按照 10 进制进行处理，而不是 8 进制
console.log("+ '0x10' = " + +"0x10");
