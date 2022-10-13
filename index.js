// using IIFE concept
(function(){
    // array of all task to be added in to do list
    let tasks=[];

    // fecthing all the required DOM
    const inputText = document.getElementById('inputtask');
    const notodoText = document.getElementById('notask')
    const taskList = document.getElementById('list-container')
    const totalTask = document.getElementById('taskcount')
    let listTask = document.getElementsByClassName('list-task')
 
    
    //for  showing notification
   function showNotification(text){
    alert(text)
    }
    

    // adding task in list
    function addTask(){
        let text = inputText.value;
        // if text is not filled in input and add button is pressed this notification should show
        if(!text){
            showNotification("Please add text")
            return;
        }
        // creating new object 
        // each task should have title,id and completed 
        // id -so while deleting you can match id and delete
        // completed -it is needed to that we can divide task into completed and uncompleted section
        const task = {
            title: text,
            id: Date.now(),
            completed: false
        }
        inputText.value=' '
        tasks.push(task)
        renderList();
    
        // changing styles of buttons
        completed.style.fontWeight = '50';
        all.style.fontWeight = '600';
        uncomplete.style.fontWeight = '50';
        totalTask.style.fontWeight="600";
        
    }
    
    // rendered list
    function renderList(){
        // each time a new task is added to array is being emptied and again both task are added in array
        taskList.innerHTML=" ";
        for(i=0;i<tasks.length;i++){
           addTaskToDom(tasks[i])
        }

        // no todo item display validation
        if (tasks.length == 0) {
            notodoText.style.display = 'block';
        }
        else {
            notodoText.style.display = 'none';
        }

        // for changing length of task left calculated completed task and subtracted it from all tasks
        let totalTasks = tasks.length;
        let completedTaskLength = tasks.filter(task =>task.completed === true).length;
        totalTask.innerHTML=totalTasks - completedTaskLength;  
    }
   
    // created new list and adding data to dom
    function addTaskToDom(task){
        // getting new date and removing gmt time 
        let date = new Date();
        date = date.toString();
        date = date.split('G')[0];
        console.log(date)
        // creating list 
        const li = document.createElement('li')
        li.innerHTML=` <div class='list-task'>
        <div class='list-task-details'>
            <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} class="custom-checkbox">
            <div class='list-task-name'><label for="${task.id}" class='title'>${task.title}</label ><div id="date">${date}</div></div>
        </div>
        <div class='list-task-delete'>
            <i class="fa-solid fa-trash-can"  data-id="${task.id}" ></i>
          
        </div>
       
    </div><br>`;
        taskList.append(li)
       
    
    }

    // deleting task=(created a new task and filtered those task whose id is not similar to delte button id)
    function deleteTask(taskId){
        let newTask = tasks.filter(function(task){
            return task.id !== Number(taskId)
        })
       
        tasks= newTask;
        renderList();
        showNotification("Task deleted successfully")

    }

    // toggling checked item-{basically we are checking which all task checked is true we are marking them false and which all checked are false we are marking them true}
    function toggleTask(taskId){
       let newTasks = tasks.filter(task=>task.id === Number(taskId));
       if(newTasks.length >0){
        let currenTask = newTasks[0]
        currenTask.completed = !currenTask.completed
        renderList()
        
        if(currenTask.completed ){
            showNotification("Task checked successfully")
        }else{
            showNotification("Task unchecked successfully")
        }
       }
       
    }

    // handling all completed option
    function markAllCompleted(){
        let markCompleted = tasks.filter(task=>task.completed === false)
        for(let x of markCompleted){
            x.completed = true;
        }
    
        renderList()
     
    }

    // handle all clicks in todo list 
    function handleClickListener(event){
        const target = event.target;
     
        if(target.id==="add"){
            addTask()
        }
        if(target.className === "custom-checkbox"){
            const taskId = target.id
            toggleTask(taskId)
         
            return 
        }
        if(target.className ==="fa-solid fa-trash-can"){
            let taskId = target.dataset.id;
            deleteTask(taskId);
            return;
        }
        // we are storing all data of task into allTasks, then we are itterating over tasks array and creating a new array completedTasks for elements
        // whose completed field is true ,then we are assigning completedTasks array to tasks so that we can render that new array on ui
        // once work is done we also need to retrive our old data of array. so again assiging allTasks in which we stored tasks data back to tasks
        if(target.id === 'completed'){
            let allTasks = tasks;
            let completedTasks = tasks.filter(task=>task.completed === true);
            tasks = completedTasks;
            renderList()
            // handling style
            completed.style.color = 'black';
            completed.style.fontWeight='600'
            uncomplete.style.color='lightgrey'
            uncomplete.style.fontWeight='50'
            all.style.color='lightgrey'
            all.style.fontWeight='50'
            clearcompleted.style.fontWeight ="50";
            clearcompleted.style.color='lightgrey'
            allcompleted.style.color='lightgrey'
            allcompleted.style.fontWeight ="50";
            tasks = allTasks;
            return;
         }

        else if(target.id === 'all'){
            renderList();
            // handling style
            all.style.color='black'
            all.style.fontWeight='600'
            uncomplete.style.color='lightgrey'
            uncomplete.style.fontWeight='50'
            completed.style.color = 'lightgrey';
            completed.style.fontWeight='50'
            clearcompleted.style.fontWeight ="50";
            clearcompleted.style.color='lightgrey'
            allcompleted.style.color='lightgrey'
            allcompleted.style.fontWeight ="50";
            return;
            

        }
         // we are storing all data of task into allTasks, then we are itterating over tasks array and creating a new array noncompletedTasks for elements
        // whose completed field is false ,then we are assigning uncompletedTasks array to tasks so that we can render that new array on ui
        // once work is done we also need to retrive our old data of array. so again assiging allTasks in which we stored tasks data back to tasks
        else if(target.id=== 'uncomplete'){
            let allTasks = tasks;
            let uncompletedTasks = tasks.filter(task=>task.completed === false)
            tasks = uncompletedTasks;
            renderList()
            // handling style
            uncomplete.style.color='black'
            uncomplete.style.fontWeight='600'
            completed.style.color = 'lightgrey';
            completed.style.fontWeight='50'
            all.style.color='lightgrey'
            all.style.fontWeight='50'
            clearcompleted.style.fontWeight ="50";
            clearcompleted.style.color='lightgrey'
            allcompleted.style.color='lightgrey'
            allcompleted.style.fontWeight ="50";
            tasks = allTasks
            return;
           
        }
        else if(target.id === "allcompleted"){
            markAllCompleted()
            // handling style
         
            allcompleted.style.color='black'
            allcompleted.style.fontWeight ="600";   
            clearcompleted.style.fontWeight ="50";
            clearcompleted.style.color='lightgrey'
            uncomplete.style.color='lightgrey'
            uncomplete.style.fontWeight='50'
            completed.style.color = 'lightgrey';
            completed.style.fontWeight='50'
            all.style.color='lightgrey'
            all.style.fontWeight='50'
        }
        // we are checking items whose completesd field are false and rendering them once we click on clear completed
        else if(target.id === "clearcompleted"){
        
            let complete = tasks.filter(task=>task.completed === false)
            tasks = complete;
            renderList()
            // handling style
            clearcompleted.style.fontWeight ="600";
            clearcompleted.style.color='black'
            allcompleted.style.color='lightgrey'
            allcompleted.style.fontWeight ="50"; 
            uncomplete.style.color='lightgrey'
            uncomplete.style.fontWeight='50'
            completed.style.color = 'lightgrey';
            completed.style.fontWeight='50'
            all.style.color='lightgrey'
            all.style.fontWeight='50'
            return;
        }
    }
   
    // this function will call all click events
    function initializeApp(){
        document.addEventListener('click',handleClickListener);
    }

    initializeApp()

})()