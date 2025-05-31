import './App.css'
import './elements/color.css'
import './elements/type.css'
import Guide from './user-controls/Guide/Guide'
import InputButton from '../src/user-controls/InputButton/InputButton'
import Checkbox from '../src/input-controls/Checkbox/Checkbox'

function App() {

  return (
    <div className='todo-container'>
      <p className='tasks-heading'>
        My tasks
      </p>
      <div className='tasks-container'>
        <div>
          <Checkbox label='task' name='task1' checked={false} ></Checkbox>
        </div>
      </div>
      <InputButton placeholder='New Task' />
      <Guide text='Swipe to clear task' />
    </div>
  )
}

export default App
