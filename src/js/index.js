 import '../sass/normalize.scss';
 import '../sass/styles.scss';

 import { Task } from './task.js'

 // import 'airbnb-browser-shims';

document.addEventListener('DOMContentLoaded', function()  {

  const area = document.querySelector('#area');
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('.modal');

  const openFormBtn = document.querySelector('#open-form-btn');
  const closeFormBtn = document.querySelector('#close-form-btn');
  const createTaskBtn = document.querySelector('#create-task-btn');
  const updateTaskBtn = document.querySelector('#update-task-btn');
  const newTaskForm = document.querySelector('#new-task-form');

  // filter section
  const searchTitle = document.querySelector('#search-title');
  const searchStatus = document.querySelector('#search-status');
  const searchPriority = document.querySelector('#search-priority');


  openFormBtn.addEventListener('click', openForm);
  closeFormBtn.addEventListener('click', cancel);
  createTaskBtn.addEventListener('click', createTask);
 

  searchTitle.addEventListener('input', (e) => {
    let found = tasks.filter((obj) => {
      return obj.getTitle().includes(e.target.value); 
    });

    updateArea(found);
  });

  searchStatus.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value === 'all') { 
      updateArea();

      return true;
    }

      let found = tasks.filter((obj) => {
        return obj.getStatus().includes(e.target.value); 
      });

      updateArea(found);
  
  });

  searchPriority.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value === 'all') { 
      updateArea();

      return true;
    }

      let found = tasks.filter((obj) => {
        return obj.getPriority().includes(e.target.value); 
      });

      updateArea(found);
  });





  // initialization of tasks storage with example task
  let tasks = [];

  const testTask = new Task (
    {
      title: 'execute test task',
      description: 'Ciclum internship',
      priority: 'high',
      status: 'open',
    }
  );


  tasks.push(testTask);
  updateArea();
  
  
    /**
   * Updating area with new tasks
   * @param { object } - task
   * @returns element of task
   */ 
  function createTaskElement(task) {
    const actionsOptions = ['...', 'done', 'edit', 'delete'];

    let item = document.createElement('div');
    let actionsContainer = document.createElement('div');

    let itemTitle = document.createElement('span');
    let itemDescription = document.createElement('p');
    let itemPriority = document.createElement('span');
    let itemActions = document.createElement('select');
    let itemStatus = document.createElement('input');
    

    for(let i = 0; i < actionsOptions.length; i++) {
      let itemActionsOption = document.createElement('option');

          itemActionsOption.value = actionsOptions[i];
          itemActionsOption.text = actionsOptions[i];

          itemActions.appendChild(itemActionsOption);
    }

    item.classList.add('task-item');
    actionsContainer.classList.add('task-actions');
    itemActions.classList.add('task-actions__menu');

    itemActions.addEventListener('change', (e) => {
      changeStatusItem(task, e.target);
    });

    itemStatus.type = 'checkbox';
    itemStatus.name = 'status';
    itemStatus.checked = true;
    itemStatus.classList.add('task-item__status');

    itemStatus.addEventListener('change', (e) => {
      if(!e.target.checked) {
        item.classList.remove('done');
        item.querySelector('.task-actions__menu').options[0].selected = true;
        task.setStatus('open');
      }
    });

    item.append(itemTitle);
    item.append(itemDescription);

    actionsContainer.append(itemPriority);
    actionsContainer.append(itemActions);

    item.append(actionsContainer);
    item.append(itemStatus);

    itemTitle.innerText = task.getTitle();
    itemDescription.innerText = task.getDescription();
    itemPriority.innerText = task.getPriority();

    if (task.getStatus() === 'done') {
      item.classList.add('done');
      itemStatus.checked = true;
      item.querySelector('.task-actions__menu').options[1].selected = true;
    }
    

    task.setElement(item);


    return task.getElement();

  }


  /**
   * Changes status of item
   * @param { object, htmlElement }
   *
   */
  function changeStatusItem(item, select) {
    const option = select.options[select.selectedIndex].value;
    
    switch(option) {
      case 'done':
        item.setStatus('done');
        item.getElement().classList.add('done');
        item.getElement().querySelector('.task-item__status').checked = true;
      break;
  
    case 'edit':  
      updateTask(item);
      break;

    case 'delete':  
      deleteTaskElement(item);
      break;
  
    default:
      return false;
    }
  }


  /**
   * Deletes task from tasks array and updates area
   *
   */
  function deleteTaskElement(item) {
    tasks.find((el, index) => {
        if(el === item) {
          tasks.splice(index, 1);
          updateArea();
        }    
    });
  }

   /**
   * Updating area with new tasks
   *
   */
  function updateArea(fillteredArr = tasks) {
    area.innerHTML = '';

      if (fillteredArr) {
        for(let i = 0; i < fillteredArr.length; i++) {
          area.append(createTaskElement(fillteredArr[i])); 
        }
      } else {

        return false;
      };
  }

   /**
   *  Checks if the form is filled
   *  @param { object } - form 
   *  @returns boolean
   */
  function validateForm(form) {
    let isValid = false;

    if(form.get('title') && form.get('description')) {
      isValid = true;
    }

    return isValid;
  }
  
  
  /**
   * Creates a new task and updates area
   * @returns boolean
   */
  function createTask() {
    const formData =  new FormData(newTaskForm);

    if(validateForm(formData)) {
      const newTask = new Task({
        title: formData.get('title'), 
        description: formData.get('description'),
        priority: formData.get('task_priority'),
        status: 'open',
      });
  
      tasks.push(newTask);
      updateArea();
  
      cancel();

    } else {

      alert('Fill the form correctly.');
    }


    return false;
  }


  /**
   * Updates task
   *
   */
  // function updateTask(item) {
  //   updateTaskBtn.classList.remove('hidden');
  //   createTaskBtn.classList.add('hidden');

  //   overlay.classList.remove('hidden');
  //   modal.classList.remove('hidden');

  //   openForm();

  //   document.forms['new-task-form'].elements['title'].value = item.getTitle();
  //   document.forms['new-task-form'].elements['description'].value = item.getDescription();
  //   document.forms['new-task-form'].elements['task_priority'].value = item.getPriority();


  //   updateTaskBtn.addEventListener('click', (e) => {
  //     e.preventDefault();

  //     let index = tasks.findIndex((el) => {
  //       return el === item;
  //     });

  //     tasks[index].setTitle(document.forms['new-task-form'].elements['title'].value); 
  //     tasks[index].setDescription( document.forms['new-task-form'].elements['description'].value); 
  //     tasks[index].setPriority(document.forms['new-task-form'].elements['task_priority'].value); 

  //     console.log(tasks[index]);
      
  //     updateArea();
  //     cancel();
  //   });

  // };


  
  
  /**
   * Opens a modal with form
   *
   */
  function openForm() {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');

    updateTaskBtn.classList.add('hidden');
    createTaskBtn.classList.remove('hidden');
  }
  
  
  /**
   * closes a modal with form and call clearForm()
   *
   */
  function cancel() {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');

    clearForm();
  }


  /**
   * Clear form
   *
   */
  function clearForm() {
    newTaskForm.reset();
  }

});
