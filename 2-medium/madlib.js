// const madLibForm = document.getElementById('madLibForm')
// const formGroup = document.getElementById('form-group')
// const madLibStory = document.getElementById('madLibStory')

// madLibStory.style.display = 'block'

// madLibForm.addEventListener('submit', function(event) {
//   event.preventDefault();

//   inputList.forEach((item) =>{
//     const storyItem = document.getElementsByClassName(item)
//     const input = document.getElementById(item)
//     storyItem.innerText = input.value
//   })
// })



// const inputList = ['country', 'pluralNoun', 'food', 'device', 'noun', 'adjective']

// inputList.forEach((item) => {
//   const br = document.createElement('br')
//   const label = document.createElement('label')
//   const input = document.createElement('input')
//   label.htmlFor = item
//   input.setAttribute('type', 'text')
//   input.setAttribute('name', item)
//   input.id = item
//   label.innerText = item
//   formGroup.append(br)
//   formGroup.append(label)
//   formGroup.append(br)
//   formGroup.append(input)
  
// })

// function createStory () {
//   inputList.forEach((item) =>{
//     const storyItem = document.getElementsByClassName(item)
//     const input = document.getElementById(item)
//     storyItem.innerText = input.value
//   })

const restartButton = document.querySelector('#restart');
const story = document.querySelector('#madLibStory');
const form = document.querySelector('#madLibForm');

function replaceContents(wordClass, inputId) {
  const elements = document.getElementsByClassName(wordClass);
  const input = document.getElementById(inputId);

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.innerText = input.value;
  }
}

const inputList = ['country', 'pluralNoun', 'food', 'device', 'noun', 'adjective']

inputList.forEach((item) => {
  const formP = document.getElementsByClassName('form-group')
  const br = document.createElement('br')
  const label = document.createElement('label')
  const input = document.createElement('input')
  formP.classList.add('form-group')
  label.htmlFor = item
  input.setAttribute('type', 'text')
  input.setAttribute('name', item)
  input.id = item
  label.innerText = item
  formP.append(br)
  formP.append(label)
  formP.append(br)
  formP.append(input)
  form.append(formP)
  
})


function showForm() {
  story.style.display = 'none';
  form.style.display = 'block';
}

function showStory() {
  story.style.display = 'block';
  form.style.display = 'none';
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  replaceContents('animal', 'animal');
  replaceContents('country', 'country');
  replaceContents('pluralNoun', 'pluralNoun');
  replaceContents('food', 'food');
  replaceContents('device', 'device');
  replaceContents('noun', 'noun');
  replaceContents('adjective', 'adjective');

  showStory()
})

restartButton.addEventListener('click', function(event) {
  event.preventDefault();
  showForm()
  form.reset();
})

