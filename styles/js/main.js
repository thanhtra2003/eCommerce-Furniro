// Câu 2
// function score(physics, chemistry, biology, mathematics, computer) {
//   var point = (physics + chemistry + biology + mathematics + computer) / 5
//   if (point >= 9) {
//     return 'Grade A'
//   } else if (point >= 8) {
//     return 'Grade B'
//   } else if (point >= 7) {
//     return 'Grade C'
//   } else if (point >= 6) {
//     return 'Grade D'
//   } else if (point >= 4) {
//     return 'Grade E'
//   } else {
//     return 'Grade F'
//   }
// }
// var physics = 5
// var chemistry = 5
// var biology = 9
// var mathematics = 8
// var computer = 3
// var grade = score(physics, chemistry, biology, mathematics, computer)
// console.log(grade)

// Câu 3
// function arr(data){
//     console.log(data.join(", "));
// }
// var data = ['A', 'B', 'C'];
// console.log(data.join(', '))

// Câu 4:
// function printArray(arr) {
//   const check = arr.some(function (value, index) {
//     return value === 5
//   })
//   console.log(check ? 'Yes' : 'No')
// }
// const arr = [3, 6, 4, 7, 2]
// console.log(printArray(arr))
// Câu 5:
// function findNumber(data) {
//   const find = data.find(function (value, index) {
//     return value > 0
//   })
//   if (true) {
//     console.log(find)
//   } else {
//     console.log('No result')
//   }
// }
// const arr = [-2, -6, -4, -7, -2]
// findNumber(arr)
// Câu 6:
// function deleteAddnumber(data) {
//     console.log(data.pop())
//     console.log(data.shift())
//   console.log(data.push('ghjk'))
// }
// const arr = [7, -6, -4, -7, -2]
// deleteAddnumber(arr)
// console.log(arr)
// Câu 7:
// function printString(str) {
//   const $string = str.charAt(0).toUpperCase() + str.slice(1)
//   console.log($string)
// }
// const tt = 'xin chào trà cute'
// printString(tt)

// Câu 9:
// const listProduct = [
//   { id: 1, name: 'Iphone 11', price: 1200 },

//   { id: 2, name: 'Iphone X', price: 1000 },
//   { id: 3, name: 'Iphone 12', price: 1500 },
//   { id: 4, name: 'Iphone 8', price: 900 }
// ]
// function sortArray(list, conditions) {
//   if (conditions == 'asc') {
//     return list.sort((a, b) => {
//       const result = a.price - b.price
//       return result
//     })
//   } else if (conditions == 'desc') {
//     return list.sort((a, b) => {
//       const result = b.price - a.price
//       return result
//     })
//   } else {
//     return 'không hợp lệ'
//   }
// }
// console.log(sortArray(listProduct, 'asc'))
// console.log(sortArray(listProduct, 'desc'))
// // Câu 10
// function cardTypeCheck(cards, type) {
//   return cards.filter(function (cards) {
//     return cards === type
//   }).length
// }
// const cardType = 3
// console.log(cardTypeCheck([1, 2, 3, 4], cardType))
// // Câu 11
// function twoSum(arr1, arr2) {
//   const number1 = parseInt(arr1.join(''))
//   const number2 = parseInt(arr2.join(''))
//   return number1 + number2
// }
// console.log(twoSum([1, 2, 3], [0, 7]))
// function calcSum(data) {
//   let sum = 0
//   for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//       sum += data[i][j]
//     }
//   }
//   return sum
// }
// console.log(
//   calcSum([
//     [1, 2, 3],
//     [2, 3, 4],
//     [0, 10]
//   ])
// )
// function changeColor() {
//   const line1 = document.querySelector('h1')
//   const color = ['red', 'yellow']
//   let colorIndex = 0

//   setInterval(() => {
//     line1.style.color = color[colorIndex]
//     colorIndex = (colorIndex + 1) % color.length
//   }, 1000)
// }
// changeColor()

// // Function to set background color based on the status of the challenge
// function setChallenge() {
//   const challenges = document.querySelectorAll('li')

//   challenges.forEach(challenge => {
//     if (challenge.textContent.includes('Done')) {
//       challenge.classList.add('done')
//     } else if (challenge.textContent.includes('Ongoing')) {
//       challenge.classList.add('ongoing')
//     } else if (challenge.textContent.includes('Coming')) {
//       challenge.classList.add('coming')
//     }
//   })
// }
// setChallenge()
const frust = ["banana", "appa", "táo", "chuối", "Lê", "Nhãn", "Xoài", "Mận", "Vải", "Mãng cầu", "Nho", "Dưa"]
console.log(frust.slice(0, 10))