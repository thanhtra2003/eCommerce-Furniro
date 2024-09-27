// Tìm tất cả các phần tử <ul> trên trang
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
