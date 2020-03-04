    // Exesize_1
// №1

// let num = []
// let num3 = []
// let num5 = []
// let num7 = []
// for(let i = 0; i <= 100; i++){
//     if(i % 3 == 0){
//         num3.push(i)
        // num.push(i)
    // } else if (i % 5 == 0) {
    //     num5.push(i)
        // num.push(i)
    // }else if (i % 7 == 0){
        // num7.push(i)
        // num.push(i)
//     }
// }
// console.log(num)
// console.log(num3)
// console.log(num5)
// console.log(num7)

// №2

// let numAll = []
// for(let i = 0; i <= 100; i++){
//     if(i % 3 == 0 || i % 5 == 0 || i % 7 == 0){
//        numAll.push(i) 
//     }
// }
// console.log(numAll)

    // Exesize_2

// №1

// var scores = [1, 0, 2, 5, 0 , 3, 0, 2, 0]
// for(let i = 0;i < scores.length; i++){
//     if(scores[i] == 0){
//         scores.splice(i, 1)
//         scores.push(0)
//     }
// }
// console.log(scores)

// №2

const intgg = [1, 0, 2, 5, 0, 3, 0, 2, 0]

const num1 = intgg.filter(filltrs => filltrs > 0)
const num2 = intgg.filter(filltrs => filltrs === 0)

console.log(num1.concat(num2))