//CREATE VARIABLE TO STORE THE INPUT VALUES
var addForm = document.getElementById('addContent');
//CREATE VARIABLE TO ADD TO EXISTING LIST OF ACTIVITY
var updateList = document.getElementById('todoList');
//ADD EVENT LISTENER TO THE BUTTON
addForm.addEventListener('submit', addUp);
//Function addContent
function addUp(e) {
    e.preventDefault();
    //GET INPUT VALUE
    var newContent = document.getElementById('itemise').value;
    if (newContent == "") {
        return alert("You Are Yet To Enter Your To-do");
    } else console.log(newContent);

    //Create A New Element
    var li = document.createElement('li');
    li.className = ('col-6 bottom');
    li.appendChild(document.createTextNode(newContent));

    //Create A Delete Element
    var deleteList = document.createElement('button');
    deleteList.className = ('btn');
    deleteList.appendChild(document.createTextNode('X'));
    li.appendChild(deleteList);

    updateList.appendChild(li).style.display = 'block';
    console.log(updateList);

}

//Add Event Listener on the Delete Button
updateList.addEventListener('click', removeList);
//Function removeList
function removeList(e) {

    if (e.target.classList.contains('btn')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            updateList.removeChild(li);
        }
    }

}

// Add Conditions to the Select Button