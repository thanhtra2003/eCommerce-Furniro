const textarea = document.getElementById('input')
const output = document.getElementById('output')

textarea.addEventListener('input', function () {
  const text = textarea.value
  const wordCount = text.split(' ').length
  console.log(wordCount)
  const charCount = text.length

  output.textContent = `You've written ${wordCount} words and ${charCount} characters.`
})
