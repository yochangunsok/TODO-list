'use strict'


document.getElementById('task-submit').addEventListener('click' , () =>{
    const listvalue = document.getElementById('task-value').value;
    const tasklist = document.getElementById('task-list');

    const li = document.createElement('li');
    li.innerHTML = listvalue;
    tasklist.appendChild(li);

    const btn = document.createElement('button');
    btn.innerHTML = 'delete';
    li.appendChild(btn);

    btn.addEventListener('click' , () => {
        const deleteli = document.querySelector('li');
        li.remove();
    });
});


document.getElementById('task-submit').onclick = function(){
    const resetform = document.getElementById('task-value');
    resetform.value = '';
};
