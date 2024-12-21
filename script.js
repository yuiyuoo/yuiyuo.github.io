const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// function addTask() {

//     const input = inputBox.value.trim();
//     if (input) {
//     //     let li = document.createElement("li");
//     //     li.innerHTML = inputBox.value;
//     //     listContainer.appendChild(li);
//     //     let checkbox = document.createElement("checkbox");
//     //     checkbox.innerHTML = "  ";
//     //     //listContainer.append(checkbox);
//     //     li.appendChild(checkbox);
//     //     let span = document.createElement("span");
//     //     span.innerHTML = "\u00d7";
//     //     li.appendChild(span);

//         const listItem = document.createElement("li");

     
//         const checkbox = document.createElement("checkbox");
//         checkbox.type = "checkbox";

//         const checkmark = document.createElement("checkmark");
//         checkmark.className = "checkmark";

//         checkbox.append(checkmark);

//         const textNode = document.createTextNode(input);

//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";

//         listItem.appendChild(checkbox);
//         listItem.appendChild(textNode);
//         listItem.appendChild(span);
//         //listItem.innerHTML = input;

//         // Append the list item to the container
//         listContainer.appendChild(listItem);

//         // Clear the input field
//       //  input.value = "";
//     }
//     inputBox.value = "";
//     saveData();

// }

function addTask() {
    const input = inputBox.value.trim();
    if (input) {
        const listItem = document.createElement("li");

        // Create the styled checkbox container
        const checkboxContainer = document.createElement("label");
        checkboxContainer.className = "checkboxContainer"; // Use your custom CSS class
        // Create the actual checkbox input
        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";

        // Create the styled checkmark
        const checkmark = document.createElement("div");
        checkmark.className = "checkmark";

        const textNode = document.createTextNode(input);

        // Append the checkbox and checkmark to the label
        checkboxContainer.appendChild(checkboxInput);
        checkboxContainer.appendChild(checkmark);
        checkboxContainer.appendChild(textNode);
        // Create the text node for the task

        // Create the delete button
        const span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for "×"
       
        

        // Append all elements to the list item
        listItem.appendChild(checkboxContainer);

        //listItem.appendChild(textNode);
        listItem.appendChild(span);

        // Append the list item to the list container
        listContainer.appendChild(listItem);

        // Clear the input field
        inputBox.value = "";

        // Save the current state
        saveData();
    } else {
        alert("please enter a task");
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Add event listener to the input box
inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
loadData();

function clearTask() {
    listContainer.innerHTML = "";
    localStorage.clear();
}
document.getElementById("clear-btn").addEventListener("click", function () {
    clearTask();
});

// // Add event listener to the add button
// document.getElementById("add-btn").addEventListener("click", function () {
//     addTask();
// });
// // Add event listener to the clear button

// // Add event listener to the delete button
// document.getElementById("delete-btn").addEventListener("click", function () {
//     listContainer.innerHTML = "";
// });
// // Add event listener to the edit button
// document.getElementById("edit-btn").addEventListener("click", function () {
//     let li = listContainer.children;
//     for (let i = 0; i < li.length; i++) {
//         li[i].contentEditable = true;
//     }
// });
// // Add event listener to the save button
// document.getElementById("save-btn").addEventListener("click", function () {
//     let li = listContainer.children;
//     for (let i = 0; i < li.length; i++) {
//         li[i].contentEditable = false;
//     }
// });
// // Add event listener to the undo button
// document.getElementById("undo-btn").addEventListener("click", function () {
//     let li = listContainer.children;
//     for (let i = 0; i < li.length; i++) {
//         li[i].contentEditable = false;
//     }
// });
// // Add event listener to the redo button
// document.getElementById("redo-btn").addEventListener("click", function () {
//     let li = listContainer.children;
//     for (let i = 0; i < li.length; i++) {
//         li[i].contentEditable = false;
//     }
// });


