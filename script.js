const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addItem() {
    const currentInput = input.value;
    input.value = "";
    
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listButton = document.createElement("button");

    listItem.appendChild(listText);
    listItem.appendChild(listButton);

    listText.textContent = currentInput;
    listButton.textContent = "Delete";

    list.appendChild(listItem);

    listButton.addEventListener("click", deleteItem);

    function deleteItem() {
        list.removeChild(listItem);
        input.focus();
    }  
}

input.focus();

button.addEventListener("click", addItem);

input.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        addItem();
    }
});


