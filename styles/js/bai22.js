const inputsearch = document.getElementById('postId')
async function getData() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const data = await fetch(url)
  const posts = await data.json()
  const postId = inputsearch.value
  const filteredPost = posts.find(post => post.id == postId)
  if (filteredPost) {
    document.getElementById('postContainer').innerHTML = `
      <div class="card">
        <h3>${filteredPost.title}</h3>
        <img src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/ai-la-nguoi-dam-me-nhung-bau-troi-dem-day-sao-dep-den-nao-long-nao.jpg"
        <p>${filteredPost.body}</p>
        <a href="#">Read More</a>
      </div>
    `
  } else {
    document.getElementById('postContainer').innerHTML = `<p>Không tìm thấy post</p>`
  }
}
