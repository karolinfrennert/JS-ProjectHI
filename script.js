// selectors

const groceryInput = document.querySelector('.add-food-input');
const groceryButton = document.querySelector('.add-food-button');
const groceryList = document.querySelector('.grocery-list');

//event-listeners
groceryButton.addEventListener('click', addGrocery);

//functions

function addGrocery(event) {

  event.preventDefault();
  //New Div with grocery items
  const groceryDiv = document.createElement('div');
  groceryDiv.classList.add("grocery-div");

//New Li of the item
  const newGroceyItem = document.createElement('li');
  newGroceyItem.innerText = "SUSHI";
  newGroceyItem.classList.add("grocery-item")

  //Add li to div
  groceryDiv.appendChild(newGroceyItem);

  //Completed button
  const completedButton = document.createElement('button');
  completedButton.innerText = "Completed";
  completedButton.classList.add("complete-button");
  //add button to div
  groceryDiv.appendChild(completedButton);

  //Trash button
  const trashButton = document.createElement('button');
  trashButton.innerText = "Trash";
  trashButton.classList.add("trash-button");
  //add button to div
  groceryDiv.appendChild(trashButton);

  groceryList.appendChild(groceryDiv);





}