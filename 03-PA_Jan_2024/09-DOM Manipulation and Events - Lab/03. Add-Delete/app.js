function addItem() {
    let input = document.getElementById("newItemText");
    if (input.value.length == 0) {
        return;
    }

    let liElement = document.createElement("li");
    liElement.textContent = input.value;

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = "[Delete]";
    deleteBtn.href = '#';
    liElement.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', onDelete)

    let list = document.getElementById("items");
    list.appendChild(liElement);

    input.value = "";

}

function onDelete(event) {
    let deleteBtn = event.target;
    let liElement = deleteBtn.parentElement;
    liElement.remove();
}