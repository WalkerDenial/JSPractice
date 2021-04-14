// function timerTest() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function timer() {
//             console.log(i);
//         }, i * 1000);
//     }
// }

// console.log("期望输出：1、2、3、4、5")
// timerTest()
// console.log("实际输出：")

function timerTest1() {
    for (var i = 1; i <= 5; i++) {
        setTimeout((function(i){
            return function timer() {
                console.log(i)
            }
        })(i), i * 1000);
    }
}

console.log("期望输出：1、2、3、4、5")
timerTest1()
console.log("实际输出：")