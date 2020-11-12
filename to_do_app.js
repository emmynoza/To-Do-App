
var submitButton= document.getElementById('submitButton');


console.log('Hello');

submitButton.addEventListener('click',(e) => {
        e.preventDefault;
        inputText= document.getElementById('questButton').value;
   
           
        createTask(inputText)

    });

function createTask(inputText){
        
    let listItem= document.createElement('li'); // creates the list item
    const questContent= document.createTextNode(inputText);
    
    listItem.appendChild(questContent); // adds the text node to the li element we just created
    
    const container= document.getElementById('list');

    task= container.appendChild(listItem);
    
    // create a delete button

    var deleteButton= document.createElement("button");
    deleteButton.className= 'deleteButton';
    deleteButton.innerHTML = "x";
    task.appendChild(deleteButton);

    // on click, delete task
    deleteButton.addEventListener('click', function(){
        console.log('delete button was clicked');
        listItem.remove();
    })

    // create a completed button

    const completedButton = document.createElement("button");
    completedButton.className= 'completedButton';
    completedButton.innerHTML = 'done!';

    task.appendChild(completedButton);

    // striketrough completed tasks

    completedButton.addEventListener('click', function(){
        listItem.style.textDecoration = "line-through" ;
        listItem.style.textDecorationColor= "red";
    });

}

