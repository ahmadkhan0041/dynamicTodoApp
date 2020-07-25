// TODO ASSIGMENT
var list = document.getElementById('totalList')

function addTodo() {
    var list = document.getElementById("totalList");
    var todo_data = document.getElementById("todo-item");

    var liTag = document.createElement('li')
    var liText = document.createTextNode(todo_data.value);
    liTag.appendChild(liText)

    // delete button
    var deleteButton = document.createElement("button")
    var deleteTax = document.createTextNode("DELETE");
    deleteButton.setAttribute("class", "btn")
    deleteButton.setAttribute("onclick", "deleteItem(this)")

    deleteButton.appendChild(deleteTax)
        // =========Edit button============= //
    var editBtn = document.createElement('button');
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class", "editbtn");
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText)

    liTag.appendChild(deleteButton)
    liTag.appendChild(editBtn)


    totalList.appendChild(liTag);
    todo_data.value = "";
    // console.log(liTag)
}

function deleteItem(e) {
    e.parentNode.remove()
}

function deleteAll() {
    totalList.innerHTML = "";
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Hey Enter Your Edit Value", val)
    e.parentNode.firstChild.nodeValue = editValue;
}