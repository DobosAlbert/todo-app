import React, {useState} from 'react';

function CreateCard(props){

    const [newTask, setNewTask] = useState({
        name: '',
        value: ''
    });
    const {setTaskList} = props
    
    function buttonEvent(){

        const item = {
            id: props.id,
            value: newTask
        };

       setTaskList( (oldList) => [...oldList, item]);
       setNewTask("");
    }
    return (
      <div className="container">
         <input placeholder='NumeleTask-ului' type="text" onChange={(e) => {
            e.preventDefault();
            setNewTask.name(e.target.value);
         }}/>
            <input placeholder='Task'type="text" onChange={(e) => {
            e.preventDefault();
            setNewTask.value(e.target.value);
         }}/>
         <button onClick = {buttonEvent}>Add task</button>

      </div>
    );
}

export default CreateCard;