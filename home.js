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
                                    <option id="${id}" class="opt" value="TO DO">TO DO</option>
                                    <option id="${id}" class="opt" value="IN PROGRESS">IN PROGRESS</option>
                                    <option id="${id}" class="opt" value="DONE">DONE</option>
                                </select>
                            </label>
                            <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                        </li>`
        taskAdd.appendChild(list);
        showrole(todo.status,id);
    })
    
}
function Addtask(value){
    let k = Number(Task.length);
    let task ={name:value,status:"TO DO"};
    const list = document.createElement('li');
    list.innerHTML = `<li class="firstcome" id="${value}"> 
                        <label for="${value}">
                            <input class="inputchecked" type="checkbox" id="${value}" name="${value}">
                            <p class="taskp" id="${k}">${value}</p>
                            <span class="material-symbols-outlined" id=${value} onclick="Edit("${k}")">edit</span>
                            <select id="${k}" onchange ="roles(${k})" class="roles" value="${k}">
                                <option id="${k}" class="opt" value="TO DO">TO DO</option>
                                <option id="${k}" class="opt" value="IN PROGRESS">IN PROGRESS</option>
                                <option id="${k}" class="opt" value="DONE">DONE</option>
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
                x.splice(id ,1);
                localStorage.setItem("todolist",JSON.stringify(x));
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
                            createp.id = id;
                        }
                        localStorage.setItem("todolist",JSON.stringify(Task));
                    })  
                    }
                    
            })
        }
    })    
}

function showrole(st,id){
    const rl = document.querySelectorAll('.opt')
    rl.forEach(e=>{
        e.removeAttribute('selected');
        if(e.value == st && e.id == id){
           e.selected = true;
        }
        
    })
}
function Showtasktodo(){
    Task.forEach((todo,id) => {
        if(todo.status == 'TO DO'){
            const list = document.createElement('li');
            list.innerHTML = `<li class="firstcome" id ="${todo.name}" name="${todo.name}"> 
                                <label for="${todo.name}">
                                    <input class="inputchecked" type="checkbox" id="${todo.name}" name="${todo.name}">
                                    <p class="taskp" id ="${id}">${todo.name}</p>
                                    <span class="material-symbols-outlined" id=${todo.name} onclick="Edit(${id})">edit</span>
                                    <select name="statustask" id="${id}" onchange ="roles(${id})" class="roles" >
                                        <option id="${id}" class="opt" value="TO DO">TO DO</option>
                                        <option id="${id}" class="opt" value="IN PROGRESS">IN PROGRESS</option>
                                        <option id="${id}" class="opt" value="DONE">DONE</option>
                                    </select>
                                </label>
                                <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                            </li>`
            taskAdd.appendChild(list);
            showrole(todo.status,id);
        }
    })
}

function Showtaskinprogess(){
    Task.forEach((todo,id) => {
        if(todo.status == "IN PROGRESS"){
            const list = document.createElement('li');
            list.innerHTML = `<li class="firstcome" id ="${todo.name}" name="${todo.name}"> 
                                <label for="${todo.name}">
                                    <input class="inputchecked" type="checkbox" id="${todo.name}" name="${todo.name}">
                                    <p class="taskp" id ="${id}">${todo.name}</p>
                                    <span class="material-symbols-outlined" id=${todo.name} onclick="Edit(${id})">edit</span>
                                    <select name="statustask" id="${id}" onchange ="roles(${id})" class="roles" >
                                        <option id="${id}" class="opt" value="TO DO">TO DO</option>
                                        <option id="${id}" class="opt" value="IN PROGRESS">IN PROGRESS</option>
                                        <option id="${id}" class="opt" value="DONE">DONE</option>
                                    </select>
                                </label>
                                <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                            </li>`
            taskAdd.appendChild(list);
            showrole(todo.status,id);
        }
    })
}
function Showtaskdone(){
    Task.forEach((todo,id) => {
        if(todo.status == "DONE"){
            const list = document.createElement('li');
            list.innerHTML = `<li class="firstcome" id ="${todo.name}" name="${todo.name}"> 
                                <label for="${todo.name}">
                                    <input class="inputchecked" type="checkbox" id="${todo.name}" name="${todo.name}">
                                    <p class="taskp" id ="${id}">${todo.name}</p>
                                    <span class="material-symbols-outlined" id=${todo.name} onclick="Edit(${id})">edit</span>
                                    <select name="statustask" id="${id}" onchange ="roles(${id})" class="roles" >
                                        <option id="${id}" class="opt" value="TO DO">TO DO</option>
                                        <option id="${id}" class="opt" value="IN PROGRESS">IN PROGRESS</option>
                                        <option id="${id}" class="opt" value="DONE">DONE</option>
                                    </select>
                                </label>
                                <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                            </li>`
            taskAdd.appendChild(list);
            showrole(todo.status,id);
        }
    })
}
function showlisttask(show){
    const z = document.querySelectorAll('li')
    z.forEach(e=>{
        e.remove();
    })
    const cle = document.querySelectorAll('span');
    cle.forEach(e=>{
        e.style.color = 'black';
    })
    const showan = document.getElementById(`${show}`);
    showan.style.color = 'rgb(188, 188, 255)';
    switch(show){
        case 'ALL':
            showTask();
            break;
        case 'TO DO':
            Showtasktodo();
            break;
        case 'IN PROGRESS':
            Showtaskinprogess();
            break;
        case 'DONE':
            Showtaskdone();
            break;
    }
}
