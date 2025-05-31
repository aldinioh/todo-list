import './App.css'
import './elements/color.css'
import './elements/type.css'
import InputButton from '../src/user-controls/InputButton/InputButton'
import Checkbox from '../src/input-controls/Checkbox/Checkbox'
import { useState } from 'react'

function App() {
  type Task = {
    title: string;
    checked: boolean;
  };

  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [animateInput, setAnimateInput] = useState(false);

  const addTask = (title: string, checked: boolean) => {
    if (title.trim() === '') 
      return;
    setTasks([...tasks, {title, checked}])
    setInputValue('');
    setAnimateInput(true); // Trigger animation
  };
  const removeTask = (taskIndex: number) => setTasks([...tasks].splice(taskIndex, 1))

  // Remove animation class after animation ends
  const handleInputAnimationEnd = () => setAnimateInput(false);

  const $myInput = document.getElementById('task-input-button');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTask(inputValue, false);
    }
  };


  return (
    <div className='todo-container'>
      <h6 className='tasks-heading'>My tasks</h6>
      <div className='tasks-container'>
        {
          tasks.map((task, index) => (
            <Checkbox 
              label={task.title} 
              name={`task${index}`} 
              checked={task.checked} 
              className={index === tasks.length - 1 ? 'create-task-animate' : ''}
            />
          ))
        }
      </div>
      <InputButton
        id="task-input-button"
        placeholder="New Task"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  )
}

export default App
