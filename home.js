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
var i = 0;
let Task =JSON.parse(localStorage.getItem('todolist'));
showTask();
function showTask(){
    Task.forEach((todo,id) => {
        const list = document.createElement('li');
        list.innerHTML = `<li class="firstcome  "> 
                            <label for="${id}">
                                <input type="checkbox" id="${id}">
                                <p>${todo.name}</p>
                                <select name="statustask" id="statustask">
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
    list.innerHTML = `<li class="firstcome  "> 
                        <label for="${''}">
                            <input type="checkbox" id="${''}">
                            <p>${value}</p>
                            <select name="statustask" id="statustask">
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


