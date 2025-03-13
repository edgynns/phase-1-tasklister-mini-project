// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get reference to the form and input elements
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const tasksList = document.getElementById('tasks');
  
  // Add event listener for form submission
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the task description
    const taskDescription = taskInput.value;
    
    // Only create a task if description isn't empty
    if (taskDescription) {
      // Create a new list item element
      const taskItem = document.createElement('li');
      
      // Set the content to the task description
      taskItem.textContent = taskDescription;
      
      // Add the task to the list
      tasksList.appendChild(taskItem);
      
      // Clear the input field
      taskInput.value = '';
    }
  });
});