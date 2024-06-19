const inputTarefa = document.querySelector('.taskinput');
const btnAddTarefa =  document.querySelector('.btnAddTask');
const ulTarefas = document.querySelector('.listaDeTarefas');

btnAddTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    createTask(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(e){
    if(e.KeyCode === 13){
        if(!inputTarefa.value) return;
        createTask(inputTarefa.value);
    }
});

function createTask(textoInput){
    const li = createItemTask();
    li.innerText = textoInput;
    ulTarefas.appendChild(li);
    clarInput();
    createBtnRemove(li);
    saveTasks();
}

function createItemTask(){
    const liitem = document.createElement('li');
    return liitem;
}

function clarInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function createBtnRemove(li){
    li.innerText += '  ';
    const btnAapagar = document.createElement('button');
    btnAapagar.innerText = 'Apagar';
    btnAapagar.setAttribute('class', 'apagartarefa');
    li.appendChild(btnAapagar);
}

document.addEventListener('click', function(e){
    const elemento = e.target;

    if(elemento.classList.contains('apagartarefa')){
        console.log(elemento.parentElement);

        elemento.parentElement.remove();
        saveTasks();
    }
});

function saveTasks(){
    const listaDeTarefas = ulTarefas.querySelectorAll('li');
    console.log(listaDeTarefas);

    const arrayListaRaefas = [];

    for(let itemtarefa of listaDeTarefas){
        let taskText = itemtarefa.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        arrayListaRaefas.push(taskText);
    }

    const tasksJSON = JSON.stringify(arrayListaRaefas);
    console.log('json', tasksJSON)
    localStorage.setItem('tarefas', tasksJSON);
}

// ver tarefas salvas no localStorage
function addTasksSaved(){
    const tasks = localStorage.getItem('tarefas');

    const listaArrayTasks = JSON.parse(tasks); //tarefas voltando a ser array
    console.log(listaArrayTasks);

    for(let itemtarefa of listaArrayTasks){
        createTask(itemtarefa);
    }
}

addTasksSaved();