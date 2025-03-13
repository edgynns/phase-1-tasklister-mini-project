document.addEventListener('DOMContentLoaded', () => {
  // Get reference to the form element
  const form = document.getElementById('create-task-form');
  
  // Get reference to the task input field
  const taskInput = document.getElementById('new-task-description');
  
  // Get reference to the tasks list
  const tasksList = document.getElementById('tasks');
  
  // Add event listener for form submission
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission (which would refresh the page)
    event.preventDefault();
    
    // Get the task description from the input field
    const taskDescription = taskInput.value;
    
    // Only create a task if the description is not empty
    if (taskDescription) {
      // Create a new list item
      const taskItem = document.createElement('li');
      
      // Set the task text
      taskItem.textContent = taskDescription;
      
      // Add the new task item to the tasks list
      tasksList.appendChild(taskItem);
      
      // Clear the input field for the next task
      taskInput.value = '';
    }
  });
});