import React, { useState, useEffect} from 'react';
import CreateCard from './components/FormCard';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);

    function deleteTask(id){
        const newArray = taskList.filter(item => item.id !== id)
        setTaskList(newArray);
    }
    useEffect(() => {
    },[]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Add new task</p>
      </header>
      <CreateCard setTaskList={setTaskList} id={taskList.length + 1}/>
      <div className="lista">
            <ul>
                {
                    taskList.map((item) => {
                        return (
                         <li key={item.id}>  {item.name}  {item.value}   <button onClick={() => {deleteTask(item.id)}}>X</button>   </li>
                        )
                    })
                }
            </ul>
         </div>
    </div>
  );
}

export default App;
