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
function roles(){
    const x = document.getElementById('statustask');
    var i = x.selectedIndex;
    x.value = x.options[i].value
    console.log(x.value);
    

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
                                <select name="statustask" id="statustask" onchange ="roles()">
                                    <option value="0">TO DO</option>
                                    <option value="1">IN PROGRESS</option>
                                    <option value="2">DONE</option>
                                </select>
                            </label>
                            <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                        </li>`
        taskAdd.appendChild(list);
    })
}
function Addtask(value){
    let task ={name:value,status:"To Do"};
    const list = document.createElement('li');
    list.innerHTML = `<li class="firstcome" id="${value}"> 
                        <label for="${value}">
                            <input class="inputchecked" type="checkbox" id="${value}" name="${value}">
                            <p class="taskp" id="">${value}</p>
                            <span class="material-symbols-outlined" id=${value} onclick="Edit()">edit</span>
                            <select id="statustask" onchange ="role()">
                                <option value="0">TO DO</option>
                                <option value="1">IN PROGRESS</option>
                                <option value="2">DONE</option>
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
                xs = del(xs)
                Task.del(xs);
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
            let k = tasks.innerText
            const createip = document.createElement('div');
            createip.innerHTML = `<input type="text" id="add2" class="add2" value="${k}">`; 
            tasks.replaceWith(createip);
            const Input2 = document.addEventListener("keypress",(e) =>
            {
                if(e.key == "Enter"){
                    const createp = document.createElement('p');
                    createp.innerHTML = `<p class="taskp">minhquan</p>`
                    }
                    
            })
        }
        

       
    })
    

    
    
}

