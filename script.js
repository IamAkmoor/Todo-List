const addToDoBtn = document.querySelector("#add-new-todo-btn");
const newToDoInput = document.querySelector("#new-todo-input");
const ulToDoList = document.querySelector("#todo-list");

//1
// addToDoBtn.addEventListener("click", function(){
//     console.log('add new todo')
// });

//2
// function addToDoBtnFn(){
//     console.log('add new todo')
// }
// addToDoBtn.addEventListener('click', addToDoBtn)

//3
// const addToDoFn = () =>  {
//     console.log('add new todo');
// }
// addToDoBtn.addEventListener("click", addToDoFn);

//4
const addToDoFn = function() {
    // console.log('add new todo');

    const inputValue = newToDoInput.value;
    // console.log(inputValue)

    //li list item
    const listItem = document.createElement('li')

    //Multiple ways to add class to a tag
    //1
    // listItem.setAttribute("class", "single-todo")

    //2
    // listItem.className = "single-todo";

    //3 
    listItem.classList.add("single-todo"); 
    // listItem.classList.remove("single-todo"); // just remove existed class

    //input checkbox
    const checkBox = document.createElement("input");
    checkBox.setAttribute('type','checkbox');
    checkBox.setAttribute('class', 'single-todo-check');


    checkBox.addEventListener('click', (e) => {
        console.log('todo checked', e.target.checked);
        const checkState = e.target.checked;

        //1
        checkBox.nextElementSibling.classList.toggle('cross-line');

        //2
        // if (checkState){
        //    checkBox.nextElementSibling.classList.add('cross-line')
        // } else {
        //     checkBox.nextElementSibling.classList.remove('cross-line')
        // }

        //3
        // const classExist = checkBox.nextElementSibling.className.includes('cross-line');
        
        // if (classExist){
        //     checkBox.nextElementSibling.classList.remove('cross-line');
        // } else {
        //     checkBox.nextElementSibling.classList.add('cross-line');
        // }
    });

    //paragraph
    const todoText = document.createElement('p');
    todoText.setAttribute("class","single-todo-text");
    todoText.innerText = inputValue;

    

    //done button
    const doneBtn = document.createElement("button");
    doneBtn.setAttribute("class", "done-btn");
    doneBtn.innerText = "Done";
    doneBtn.addEventListener('click',() => {
        console.log("done btn clicked");
        doneBtn.style.display = "none";
        editBtn.style.display = "block";
        editText.style.display = "none";
        todoText.style.display = "block";
        document.querySelector(".edit-single-todo-text").value = document.querySelector("p").innerHTML;
    });

    //edit text
    const editText = document.createElement("input");
    editText.setAttribute("type", "text");
    editText.classList.add("edit-single-todo-text");
    
    
    //edit button
    const editBtn = document.createElement("button");
    
    editBtn.innerText = 'Edit';
    editBtn.setAttribute('class','edit-btn');
    editBtn.style.backgroundColor = "grey"
    editBtn.addEventListener('click',() => {
        console.log("edit btn clicked");
        editText.style.display = "block";
        todoText.style.display = "none";
        editBtn.style.display = "none";
        doneBtn.style.display = "block";
        // editText.value = todoText.innerHTML;

    });

     //delete button
     const deleteBtn = document.createElement("button");
     // deleteBtn.innerHTML= 'Delete';
     deleteBtn.innerText = 'Delete';
     // deleteBtn.textContent = 'Delete';
     deleteBtn.setAttribute('class','delete-btn');
 
     deleteBtn.addEventListener('click',() => {
         console.log("delete btn clicked");
 
         //1
         // deleteBtn.parentElement.remove()
 
         //2 
         // const item = deleteBtn.parentElement;
         // const ul = item.parentElement;
         // ul.removeChild(item);
 
         //3
         deleteBtn.parentNode.remove();
     });

    //Add child element to listItem
    //1
    listItem.appendChild(checkBox);
    listItem.appendChild(todoText);
    listItem.appendChild(editText);
    listItem.appendChild(editBtn);
    listItem.appendChild(doneBtn);
    listItem.appendChild(deleteBtn);



    //2
    // listItem.append(checkBox,todoText,deleteBtn);

    if (inputValue !== ''){
        ulToDoList.appendChild(listItem);
    }

    //Reset input value
    newToDoInput.value = "";
};


////////////////////////////////////////////////////////


// function myBtnFn(){
//     console.log("delete btn clicked")
// }
// function myCheckBoxFn(){
//     console.log("checkbox clicked")
// }


// const addToDoFn = function() {
//     const inputValue = newToDoInput.value;

//     if (!inputValue){
//         ulToDoList.innerHTML += `
//         <li class="single-todo">
//             <input type="checkbox" class="single-todo-check" onclick = "myCheckBoxFn()">
//             <p class="single-todo-text">${inputValue}</p>
//             <button class="delete-btn" onclick = "myBtnFn()">Delete</button>
//         </li>`
    
       
//         //Reset input value
//         newToDoInput.value = "";
//     }
// };


addToDoBtn.addEventListener("click", addToDoFn);

