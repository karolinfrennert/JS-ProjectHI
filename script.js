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
 
//New Li of the item + min input required

  const newGroceyItem = document.createElement('li');
  const inputValue = groceryInput.value;
    if (!inputValue) {
    errorMessage.innerHTML = "Please enter something";
    return;
  } 

  //Create span to contain text of input
  const itemName = document.createElement('span');

  itemName.innerText = inputValue;   
  newGroceyItem.appendChild(itemName);

  //Completed button
  const completedButton = document.createElement('button');
  completedButton.innerText = tickEmoji;
  completedButton.addEventListener('click',taskStatus);

  //add button to li
  newGroceyItem.appendChild(completedButton);

  //Trash button
  const trashButton = document.createElement('button');
  trashButton.innerText = trashEmoji;
  trashButton.classList.add("trash-button");
  trashButton.addEventListener('click', trash);

  //add button to li
  newGroceyItem.appendChild(trashButton);
  groceryList.insertAdjacentElement('afterbegin', newGroceyItem);

  //Clean up the inputfield
  groceryInput.value = "";
  
}

function trash() {
  this.removeEventListener('click', trash);
  const wrapper = this.closest("li");
  wrapper.remove();
};

function taskStatus() {
      
  const buttonText = this.innerText;
  buttonText === crossEmoji 
    ? this.innerText = tickEmoji
    : this.innerText = crossEmoji;

    this.closest("li").classList.toggle("strikeThrough");

}

