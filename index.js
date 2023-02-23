// 
const task = document.querySelector('#task'),
      filter = document.querySelector('#filter'),
      form = document.querySelector('#task-form'),
      ulList = document.querySelector('.collection'),
      clearTasks = document.querySelector('.clear-tasks');
      
//add event listenner 
form.addEventListener('submit',addTask);
ulList.addEventListener('click',removeTask);
clearTasks.addEventListener('click',removeAllTask);
filter.addEventListener('keyup',filterTask);

//function add function
function addTask(e){

  if(task.value ==''){
      alert('Veuiller entrer une tache');
  }
  else{
    //create a new list
    const list = document.createElement('li');
    list.classList = 'delete-item collection-item';
    const test = document.createTextNode(task.value);
    list.appendChild(test);
    const link = document.createElement('a');
    const icon = document.createElement('i');
    const icon1 = document.createElement('i');
    icon.innerHTML = `<i class="fa fa-remove secondary-content"></i>`;
    icon1.innerHTML = `<i class="fa fa-plus secondary-content"></i>`;
    link.appendChild(icon);
    list.appendChild(link)
    ulList.appendChild(list);
    
    task.value = '';
  }
  e.preventDefault();
}

//function remove task
function removeTask(e){

  if(e.target.className == 'fa fa-remove danger-content'){
    if(confirm("ARE YOU SURE!")){
      e.target.parentElement.parentElement.parentElement.remove();
    }
     
    }

    e.preventDefault();
}

//suppression des taches
function removeAllTask(){

  if(confirm("Etes vous sur!")){
    ulList.innerHTML = '';
  }
  
}

 
//function filter task
function filterTask(e){
 
  const text = e.target.value.toLowerCase();
  const allTask = document.querySelectorAll('.collection-item');
  allTask.forEach(task => {
    const item = task.firstChild.textContent;

    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });

}