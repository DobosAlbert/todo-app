import React, {useState} from 'react';

function CreateCard(props){

    const [newTask, setNewTask] = useState("");
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
         <input type="text" onChange={(e) => {
            e.preventDefault();
            setNewTask(e.target.value);
         }}/>
         <button onClick = {buttonEvent}>Add task</button>

      </div>
    );
}

export default CreateCard;