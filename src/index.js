// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Get reference to the form
  const form = document.getElementById('create-task-form');
  
  // Get reference to the input field
  const taskInput = document.getElementById('new-task-description');
  
  // Get reference to the tasks list
  const tasksList = document.getElementById('tasks');
  
  // Handle form submission
  form.addEventListener('submit', function(event) {
    // Always prevent the default form submission
    event.preventDefault();
    
    // Get the task description, trimming any whitespace
    const taskDescription = taskInput.value.trim();
    
    // Only create a new task if there's actual content
    if (taskDescription !== '') {
      // Create a new list item
      const taskItem = document.createElement('li');
      
      // Set the text content to the task description
      taskItem.textContent = taskDescription;
      
      // Add the task to the list
      tasksList.appendChild(taskItem);
      
      // Clear the input field
      taskInput.value = '';
    }
  });
});