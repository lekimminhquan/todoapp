const taskAdd = document.querySelector('ul');
const Input = document.addEventListener("keypress",(e)=>{
    if(e.key == 'Enter'){
        var valInput = document.getElementById('add').value;
        if(valInput != ''){
            Addtask(valInput);
            document.getElementById('add').value ='';
        }
        else{
            return 0;
        }
        
    }
})
function roles(name){
    rol = document.querySelectorAll('.roles');
    rol.forEach(tasks => {
        if(tasks.id == name){
            console.log(name)
            Task.forEach((todo,id) =>{
                if(id == name){
                    todo.status = tasks.value;
                    localStorage.setItem("todolist",JSON.stringify(Task))
                    showrol = document.querySelectorAll('.opt')
                    showrol.forEach(e=>{
                        if(e.id == name){
                            if(e.value == todo.status){
                                e.className= 'selected';
                            }
                        }
                    })
                }
            })
        }
    })

}   


var i = 0;
let Task =JSON.parse(localStorage.getItem('todolist'));
showTask();
function showTask(){
    Task.forEach((todo,id) => {
        const list = document.createElement('li');
        list.innerHTML = `<li class="firstcome" id ="${todo.name}" name="${todo.name}"> 
                            <label for="${todo.name}">
                                <input class="inputchecked" type="checkbox" id="${todo.name}" name="${todo.name}">
                                <p class="taskp" id ="${id}">${todo.name}</p>
                                <span class="material-symbols-outlined" id=${todo.name} onclick="Edit(${id})">edit</span>
                                <select name="statustask" id="${id}" onchange ="roles(${id})" class="roles" >
                                    <option id="${id}" class="opt" value="todo">TO DO</option>
                                    <option id="${id}" class="opt" value="inprogress">IN PROGRESS</option>
                                    <option id="${id}" class="opt" value="done">DONE</option>
                                </select>
                            </label>
                            <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                        </li>`
        taskAdd.appendChild(list);
    })
    roles();
}
function Addtask(value){
    let task ={name:value,status:"To Do"};
    const list = document.createElement('li');
    list.innerHTML = `<li class="firstcome" id="${value}"> 
                        <label for="${value}">
                            <input class="inputchecked" type="checkbox" id="${value}" name="${value}">
                            <p class="taskp" id="">${value}</p>
                            <span class="material-symbols-outlined" id=${value} onclick="Edit()">edit</span>
                            <select id="${value}" onchange ="role(${value})" class="roles" value="${task.status}">
                                <option value="todo">TO DO</option>
                                <option value="inprogress">IN PROGRESS</option>
                                <option value="done">DONE</option>
                            </select>
                        </label>
                        <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                    </li>`
    taskAdd.appendChild(list);
    if(!Task){
        Task = [];
    }
    Task.push(task);
    localStorage.setItem("todolist",JSON.stringify(Task));
}

function Checked(){
    var del;
    const checkbox = document.querySelectorAll(".inputchecked:checked");
    checkbox.forEach(e =>{
        del = document.getElementById(e.id);
        del.remove()
        let x = JSON.parse(localStorage.getItem('todolist'));
        x.forEach((xs,id) =>{
            if(xs.name == e.id){
                Task.splice(xs.id,1);
                localStorage.setItem("todolist",JSON.stringify(Task));
            }
        })
    })
}

function Edit(name){
    const task = document.querySelectorAll(".taskp")
    console.log(name)
    task.forEach(tasks =>{
        if(tasks.id == name ){
            let k = tasks.innerText;
            const createip = document.createElement('input');
            createip.className ="add2";
            createip.id='add2'
            createip.type ='text';
            createip.value =k;
            tasks.parentNode.replaceChild(createip,tasks)
            let replace = document.querySelector(".add2");
            const Input2 = document.addEventListener("keypress",(e) =>
            {
                if(e.key == "Enter"){
                    const input = document.getElementById('add2').value;
                    console.log(input);
                    let createp = document.createElement('p');
                    createp.className = 'taskp';
                    createp.innerHTML = input;
                    
                    replace.replaceWith(createp);
                    Task.forEach((todo,id)=>{
                        if(todo.name == k){
                            todo.name = input;
                            console.log(todo.name);
                            createp.id = id;
                        }
                        localStorage.setItem("todolist",JSON.stringify(Task));
                    })  
                    }
                    
            })
        }
    })
    

    
    
}

