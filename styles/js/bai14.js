// Bài 14
const fruitList = ['apple', 'banana', 'tomato']
const ulElement = document.getElementById('fruit-list')

fruitList.forEach(fruit => {
  const liElement = document.createElement('li') // Tạo phần tử <li>
  liElement.textContent = fruit // Thêm tên trái cây vào <li>
  ulElement.appendChild(liElement) // Thêm <li> vào <ul>
})
// Bài 15
const imageSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbl47VAQK_3kDo3-L6d84Y2qX-f0TTUlgIQ&s'
const image = document.createElement('img')
image.src = imageSrc
const divElement = document.querySelector('div')
divElement.appendChild(image)
// Bài 16
const allul = document.querySelectorAll('ul')

// Lặp qua từng <ul>
allul.forEach(list => {
  const listItems = list.querySelectorAll('li') // Tìm tất cả các <li> trong <ul>
  if (listItems.length > 0) {
    // Thay đổi văn bản của mục đầu tiên
    listItems[0].innerHTML = 'đầu tiên'
    // Thay đổi văn bản của mục cuối cùng
    listItems[listItems.length - 1].innerHTML = 'cuối cùng'
  }
})
// Bài 17
const listapp = document.querySelector('list app');
const listul = document.createElement('ul');
listapp.appendChild(listul);
// Bài 13
function changeColor() {
  const line1 = document.querySelector('h1')
  const color = ['red', 'yellow']
  let colorIndex = 0

  setInterval(() => {
    line1.style.color = color[colorIndex]
    colorIndex = (colorIndex + 1) % color.length
  }, 1000)
}
changeColor()

// Function to set background color based on the status of the challenge
function setChallenge() {
  const challenges = document.querySelectorAll('li')

  challenges.forEach(challenge => {
    if (challenge.textContent.includes('Done')) {
      challenge.classList.add('done')
    } else if (challenge.textContent.includes('Ongoing')) {
      challenge.classList.add('ongoing')
    } else if (challenge.textContent.includes('Coming')) {
      challenge.classList.add('coming')
    }
  })
}
setChallenge()
