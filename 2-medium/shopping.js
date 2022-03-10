const newItemForm = document.getElementById('newItemForm')
const shoppingList = document.getElementById('shoppingList')
// const itemsInList = shoppingList.getElementsByTagName('li')
const item = document.getElementById('item')


newItemForm.addEventListener('submit', addListItem)



function addListItem(event){
  event.preventDefault()

  const newListItem = document.createElement('li')
  newListItem.innerText = item.value
  const deleteButton = document.createElement('button')
  deleteButton.addEventListener('click', removeItem)
  deleteButton.innerText = 'Delete Me!'
  newListItem.append(deleteButton)
  shoppingList.append(newListItem)
}

function removeItem(){
  this.closest('li').remove()
}





