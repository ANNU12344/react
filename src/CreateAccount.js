// CreateAccount.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {
  const [title, setTitle] = useState('');
  const [taskAssign, setTaskAssign] = useState(''); // Use taskAssign instead of assignee
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend
      const response = await axios.post('http://localhost:3001/create-task', {
        title,
        task_assign: taskAssign, // Match the field name with the backend
        deadline,
      });
      
      console.log('Response from the backend:', response.data);

      // Clear the form fields after submission if needed
      setTitle('');
      setTaskAssign('');
      setDeadline('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Task Assign:
          <input type="text" value={taskAssign} onChange={(e) => setTaskAssign(e.target.value)} />
        </label>
        <br />
        <label>
          Deadline:
          <input type="text" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateAccount;
