let todos = JSON.parse(localStorage.getItem('todos')) || []
const saveTodos = () => localStorage.setItem('todos', JSON.stringify(todos))
document.getElementById('btn_add').addEventListener('click', () => {
  const input = document.getElementById('textinput')
  if (input.value.trim()) {
    todos.unshift({ text: input.value.trim(), completed: false })
    input.value = ''
    saveTodos()
    renderTodos()
  }
})

document.getElementById('all').addEventListener('click', () => {
  renderTodos('all')
})

document.getElementById('unfinished').addEventListener('click', () => {
  renderTodos('unfinished')
})

document.getElementById('finish').addEventListener('click', () => {
  renderTodos('finish')
})

const renderTodos = (filter = 'all') => {
  const container = document.querySelector('.container')
  container.innerHTML = ''
  todos
    .filter(todo => (filter === 'unfinished' ? !todo.completed : filter === 'finish' ? todo.completed : true))
    .forEach((todo, index) => {
      const todoItem = document.createElement('div')
      todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`
      todoItem.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''} data-index="${index}">
        <label>${todo.text}</label>
      `
      container.appendChild(todoItem)
      todoItem.querySelector('input[type="checkbox"]').addEventListener('change', e => {
        const idx = e.target.getAttribute('data-index')
        todos[idx].completed = !todos[idx].completed
        saveTodos()
        renderTodos(filter)
      })
    })
}
renderTodos()
