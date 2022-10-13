Functionalities
1.Add
2.Delete
3.Toggle task
4.showNotification
5.Completed task
6.Uncomplete task
7.clear completed task
8.Mark all task as completed together



Functions
1.ShowNotification -showNotification()
2.Adding task-addTask()
3.Renderlist (showing items on UI)-renderList()
4.Adding task to DOM-addTaskToDom()
5.Deleting task from list -deleteTask()
6.Mark all item as completed -markAllCompleted()
7.Handling all clicks on UI -handleClickListener()



STEPS
1.created empty  array Task so that we can add items in that task array
2.Added event click listener on UI to handle all clicks
3.created a list  in DOM to add array
4.Created a function for showing ShowNotification
5.Created a function add task to add items in task array.
   -created object  which have title , key which can help us while deletion of object  and completed option which will further help us in pushing task into uncomplete or complete options.
6.Created a delete function for deleting task
- for deleting ,created a new array(newTask) and filtered task from old array(tasks) whose id matched with the id of clicked delete option 
7.Created a toggle so that we can change completed of each task from true to false when unchecked or false to true when checked,which will further help us in pushing task into completed zone or uncompleted zone
8.We also implemented an option to mark all task as completed together by itterating on tasks array and finding out which tasks completed is false .Once we got those tasks we changed the completed option to true
9.For moving tasks to completed ,uncompleted or clearing all completed tasks .
  -first we stored old array into one variable
  -then created different array and filtered tasks accordingly 
  -suppose we need all uncompleted tasks together when we click on uncompleted option.So created a new array itterated on old array checked all tasks whose completed
   option was false pushed into new array .Assigned same new array to old array and rendered on UI once its rendered .As,starting itself we saved whole array into different variable we again assigned that array to our old array.
   so our data is not lost in this way