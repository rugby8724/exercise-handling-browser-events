const madLibForm = document.getElementById('madLibForm')
const formGroup = document.getElementsByClassName('form-group')
const madLibStory = document.getElementById('madLibStory')
const restartButton = document.getElementById('restart')


madLibForm.addEventListener('submit', fillBlanks)


// madLibForm.addEventListener('submit', function(event) {
//   event.preventDefault();

//   inputList.forEach((item) =>{
//     const storyItem = document.getElementsByClassName(item)
//     const input = document.getElementById(item)
//     storyItem.innerText = input.value
//   })
// })

function insertBefore(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode);
}




const inputList = ['country', 'pluralNoun', 'food', 'device', 'noun', 'adjective']

inputList.forEach((item) => {
  const p = document.createElement('p')
  const br = document.createElement('br')
  const label = document.createElement('label')
  const input = document.createElement('input')
  p.classList.add('form-group')
  label.htmlFor = item
  input.setAttribute('type', 'text')
  input.setAttribute('name', item)
  input.id = item
  label.innerText = item
  p.append(br)
  p.append(label)
  p.append(br)
  p.append(input)
  p.append(br)  
  p.after(formGroup)
  insertBefore(p, madLibForm.lastElementChild)
})

function showForm() {
  madLibStory.style.display = 'none';
  madLibForm.style.display = 'block';
}

function showStory() {
  madLibStory.style.display = 'block';
  madLibForm.style.display = 'none';
}

function replaceContents(wordClass, inputId) {
  const elements = document.getElementsByClassName(wordClass);
  const input = document.getElementById(inputId);

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.innerText = input.value;
  }
}

function fillBlanks(event) {
  event.preventDefault()

  inputList.forEach((item) => {
    replaceContents(item, item)
  })

  showStory()
}

restartButton.addEventListener('click', function(event) {
  event.preventDefault();
  showForm()
  form.reset();
})

