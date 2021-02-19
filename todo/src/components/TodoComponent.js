
import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoComponent = () => {
    const [todoList, setTodoList] = useState([{name:"task1", check: false}])

    const [newObj, setNewObj] = useState(todoList) 

    const addTask = () => {
        let name = document.getElementById("text").value
        setTodoList(todoList.concat({name: name, check: false}))
        setNewObj(newObj.concat({name: name, check: false}))
        document.getElementById("text").value = ""
    }
    const changeStatus = (index) => {
        setNewObj([...todoList]);
        newObj[index].check = !newObj[index].check; 
        console.log(newObj[index].check);

    }

    const deleteTask = (index) => {
        setTodoList(todoList.filter((_item, i) => i !== index));
        setNewObj(newObj.filter((_item, i) => i !== index))
    }
    return (
        <div>
            <textarea id="text"></textarea>
            <br/>
        <button className="add-button" onClick={addTask}>Add Task</button>
        <br/>
        {
            todoList.map((item, index) => {
                return <div key={index}>
                    <br/>
                {item.name}
                <input id={index} type="checkbox" checked={newObj[index].check} onChange={(e) => changeStatus(index)}/>
                
                <input className="delete-button" type="button" onClick={(e) => deleteTask(index)} value="DELETE"/>
                
                </div>
                
            })
        
        }
        
        
        </div>

        
    )
    
}
export default TodoComponent;
