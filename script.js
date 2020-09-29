//Emojis
const tickEmoji = "✔️";
const crossEmoji = "❌";
const trashEmoji = "🗑️";



// selectors
const groceryInput = document.querySelector('.add-food-input');
const groceryButton = document.querySelector('.add-food-button');
const groceryList = document.querySelector('.grocery-list');
const errorMessage = document.querySelector('.error');



//event-listeners
groceryButton.addEventListener('click', addGrocery);

//functions
function addGrocery(event) {
  event.preventDefault();
  
//error message for cleanup
errorMessage.innerHTML = "";


 //New Div with grocery items
const groceryDiv = document.createElement('div');
groceryDiv.classList.add("grocery-div");

//New Li of the item + min input required

  const newGroceyItem = document.createElement('li');
  const inputValue = groceryInput.value;
    if (!inputValue) {
    errorMessage.innerHTML = "Please enter something";
    return;
  } 

  newGroceyItem.innerText = inputValue;
  newGroceyItem.classList.add("grocery-item")
  
  //Add li to div
  groceryDiv.appendChild(newGroceyItem);

  //Completed button
  const completedButton = document.createElement('button');
  completedButton.innerText = tickEmoji;
  completedButton.addEventListener('click',taskStatus);

  //add button to div
  groceryDiv.appendChild(completedButton);

  //Trash button
  const trashButton = document.createElement('button');
  trashButton.innerText = trashEmoji;
  trashButton.classList.add("trash-button");
  trashButton.addEventListener('click', trash);

  //add button to div
  groceryDiv.appendChild(trashButton);
  groceryList.appendChild(groceryDiv);

  //Clean up the inputfield
  groceryInput.value = "";
  
}

function trash() {
  this.removeEventListener('click', trash);
  const wrapper = this.closest(".grocery-div");
  wrapper.remove();
};

function taskStatus() {
      
  const buttonText = this.innerText;
  buttonText === crossEmoji 
    ? this.innerText = tickEmoji
    : this.innerText = crossEmoji;

}

