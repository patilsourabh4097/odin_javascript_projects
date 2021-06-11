
const inputBox = document.querySelector(".input-field input");
const addBtn = document.querySelector(".input-field button");
const todoList = document.querySelector('.TODOlist');
const deleteAll = document.querySelector('.footer button');

inputBox.onkeyup = ()=> {
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}

showTasks();
// when user clicks on addBtn

addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem('New Todo');
    if(getLocalStorage == null){
        listArr = []
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    showTasks();
    addBtn.classList.remove("active");
}

// function to add task list inside ul
function showTasks(){
    let getLocalStorage = localStorage.getItem('New Todo');
    if(getLocalStorage == null){
        listArr = []
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNum = document.querySelector('.pendingNum');
    pendingNum.innerHTML = listArr.length;
    if(listArr.length >0){
        deleteAll.classList.add('active');

    }else{
        deleteAll.classList.remove('active');
    }
    let newLiTag = '';
    listArr.forEach( (element, index) => {
        newLiTag += `<li>${element} <span onclick = "deleteTask( ${index})"> <i class="fas fa-trash"></i></span> </li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = '';
}

// function to delete task
function deleteTask(index){
    let getLocalStorage = localStorage.getItem('New Todo');
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    // after remove li, update the list again
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    showTasks();
}

//delete all task function

deleteAll.onclick = ()=>{
    listArr = [];
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    showTasks();
}

