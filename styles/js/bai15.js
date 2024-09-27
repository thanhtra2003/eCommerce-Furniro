const imageSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbl47VAQK_3kDo3-L6d84Y2qX-f0TTUlgIQ&s'

// Tạo một phần tử img mới
const image = document.createElement('img')
image.src = imageSrc // Gán đường dẫn hình ảnh cho thuộc tính src của img

// Tìm phần tử div hiện có
const divElement = document.querySelector('div')

// Thêm phần tử img vào div
divElement.appendChild(image)
