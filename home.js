async function getapi(){
    const getapis = await axios.get('https://6641d7633d66a67b34352311.mockapi.io/api/todolist/1')
    return getapis
}

async function postapi(item,status){
    const postapis = await axios.post('https://6641d7633d66a67b34352311.mockapi.io/api/todolist/1',{
            item:item,
            status:status, 
    })
}

async function putapi(item,id){
    const putapis = await axios.put('https://6641d7633d66a67b34352311.mockapi.io/api/todolist/1/'+id,{
        item:item,
        status:status
        })
}
async function putroleapi(role,id){
    const putroleapi = await axios.put('https://6641d7633d66a67b34352311.mockapi.io/api/todolist/1/'+id,{
        status:role
    })
}



async function delapi(id){
    const delapis = await axios.delete('https://6641d7633d66a67b34352311.mockapi.io/api/todolist/1/'+id,)
}
// delapi(4);
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
            putroleapi(tasks.value,name)
        }
    })

}   


var i = 0;

showTask();
function showTask(){
    const show = getapi()
     .then(res=>{
        res.data.forEach(e=>{
            const list = document.createElement('li');
            list.innerHTML = `<li class="firstcome" id ="${e.id}"> 
                                <label for="">  
                                    <input class="inputchecked" type="checkbox" id="${e.id}">
                                    <p class="taskp" id ="${e.id}">${e.item}</p>
                                    <span class="material-symbols-outlined" id="" onclick="Edit(${e.id})">edit</span>
                                    <select name="statustask" id="${e.id}" onchange ="roles(${e.id})" class="roles" >
                                        <option id="${e.id}" class="opt" value="TO DO">TO DO</option>
                                        <option id='${e.id}'class="opt" value="IN PROGRESS">IN PROGRESS</option>
                                        <option id="${e.id}" class="opt" value="DONE">DONE</option>
                                    </select>
                                </label>
                                <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                            </li>`
            taskAdd.appendChild(list);
            showrole(e.status,e.id)
        })
            
     })
    }
    
var k = 1;
function Addtask(value){
   postapi(value,'TO DO')
    const list = document.createElement('li');
    list.innerHTML = `<li class="firstcome" id=""> 
                        <label for="${value}">
                            <input class="inputchecked" type="checkbox" id="${k}" name="${value}">
                            <p class="taskp" id="${k}">${value}</p>
                            <span class="material-symbols-outlined" id=${value} onclick="Edit(${k})">edit</span>
                            <select id="${k}" onchange ="roles(${k})" class="roles" value="">
                                <option id="${k}" class="opt" value="TO DO">TO DO</option>
                                <option id="${k}" class="opt" value="IN PROGRESS">IN PROGRESS</option>
                                <option id="${k}" class="opt" value="DONE">DONE</option>
                            </select>
                        </label>
                        <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                    </li>`
    taskAdd.appendChild(list);
    k += 1;
}

function Checked(){
    var del;
    const checkbox = document.querySelectorAll(".inputchecked:checked");
    checkbox.forEach(e =>{
        del = document.getElementById(e.id);
        del.remove()
        delapi(e.id)
        
    })
}

function Edit(name){ 
    console.log(name)
    const task = document.querySelectorAll(".taskp") 
    task.forEach(tasks =>{
        if(tasks.id == name){
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
                    const input = createip.value;
                    let createp = document.createElement('p');
                    createp.className = 'taskp';
                    createp.innerHTML = input;
                    createp.id = name;
                    replace.replaceWith(createp);
                    putapi(input,name)
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
    const show = getapi()
     .then(res=>{
        res.data.forEach(e=>{
            if(e.status == 'TO DO'){
            const list = document.createElement('li');
            list.innerHTML = `<li class="firstcome" id ="${e.id}"> 
                                <label for="">  
                                    <input class="inputchecked" type="checkbox" id="${e.id}">
                                    <p class="taskp" id ="${e.id}">${e.item}</p>
                                    <span class="material-symbols-outlined" id="" onclick="Edit(${e.id})">edit</span>
                                    <select name="statustask" id="${e.id}" onchange ="roles(${e.id})" class="roles" >
                                        <option id="${e.id}" class="opt" value="TO DO">TO DO</option>
                                        <option id='${e.id}'class="opt" value="IN PROGRESS">IN PROGRESS</option>
                                        <option id="${e.id}" class="opt" value="DONE">DONE</option>
                                    </select>
                                </label>
                                <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                            </li>`
            taskAdd.appendChild(list);
            showrole(e.status,e.id)
        }
        })
            
     })
}

function Showtaskinprogess(){
    const show = getapi()
     .then(res=>{
        res.data.forEach(e=>{
            if(e.status == 'IN PROGRESS'){
            const list = document.createElement('li');
            list.innerHTML = `<li class="firstcome" id ="${e.id}"> 
                                <label for="">  
                                    <input class="inputchecked" type="checkbox" id="${e.id}" >
                                    <p class="taskp" id ="${e.id}">${e.item}</p>
                                    <span class="material-symbols-outlined" id="" onclick="Edit(${e.id})">edit</span>
                                    <select name="statustask" id="${e.id}" onchange ="roles(${e.id})" class="roles" >
                                        <option id="${e.id}" class="opt" value="TO DO">TO DO</option>
                                        <option id='${e.id}'class="opt" value="IN PROGRESS">IN PROGRESS</option>
                                        <option id="${e.id}" class="opt" value="DONE">DONE</option>
                                    </select>
                                </label>
                                <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                            </li>`
            taskAdd.appendChild(list);
            showrole(e.status,e.id)
        }
        })
            
     })
}
function Showtaskdone(){
    const show = getapi()
     .then(res=>{
        res.data.forEach(e=>{
            if(e.status == 'DONE'){
            const list = document.createElement('li');
            list.innerHTML = `<li class="firstcome" id ="${e.id}" > 
                                <label for="">  
                                    <input class="inputchecked" type="checkbox" id="${e.id}">
                                    <p class="taskp" id ="${e.id}">${e.item}</p>
                                    <span class="material-symbols-outlined" id="" onclick="Edit(${e.id})">edit</span>
                                    <select name="statustask" id="${e.id}" onchange ="roles(${e.id})" class="roles" >
                                        <option id="${e.id}" class="opt" value="TO DO">TO DO</option>
                                        <option id='${e.id}'class="opt" value="IN PROGRESS">IN PROGRESS</option>
                                        <option id="${e.id}" class="opt" value="DONE">DONE</option>
                                    </select>
                                </label>
                                <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                            </li>`
            taskAdd.appendChild(list);
            showrole(e.status,e.id)
        }
        })
            
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
