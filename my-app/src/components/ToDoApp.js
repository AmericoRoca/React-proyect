import {useState} from 'react';
import ToDo from './ToDo';
import '../css/ToDoApp.css'



export default function ToDoApp(){
    
    const [title, setTitle] = useState("");
    const [toDos, setToDos] = useState([]);



    function handleChange(event){
        const value = event.target.value;

        setTitle(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const newToDo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        } 

        const temp = [...toDos];
        temp.unshift(newToDo);

        setToDos(temp);

        setTitle('');
    }

    function handleUpdate(id, value){
        const temp = [...toDos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setToDos(temp);

    }

    function handleDelete(id){
        const temp = toDos.filter(item => item.id !== id);

        setToDos(temp);
    }

    return (
        <div className='todoContainer'>
            <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input className="todoInput" onChange={handleChange} value={title}/>
            <input type="submit" value="Crear" className="buttonCreate" onClick={handleSubmit}/>
            </form>

            <div className='todosContainer'>
                {
                    toDos.map(item => (
                        <ToDo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    ))
                }
            </div>
        </div>
        
    )
}