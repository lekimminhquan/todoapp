const taskAdd = document.querySelector('ul');
const Input = document.addEventListener("keypress", (e)=>{
    if(e.key == 'Enter'){
        const valInput = document.getElementById('add').value;
        if(valInput != ''){
            Addtask(valInput);
        }
        else{
            return 0;
        }
        
    }
})
var i = 0;
function Addtask(value){
    const li = document.createElement('li');
    li.innerHTML = ` <li class="firstcome"> 
                        <label for="${i}">
                            <input type="checkbox" id="${i}">
                            <p>${value}</p>
                            <select name="statustask" id="statustask">
                                <option value="0">TO DO</option>
                                <option value="1">IN PROGRESS</option>
                                <option value="2">DONE</option>
                            </select>
                        </label>
                        <p style="border-bottom: 1px solid black; width:50% ; position: relative; margin: 0 auto;"></p>
                    </li>`
    
    taskAdd.appendChild(li)
    i+=1;
}

