import { useState } from "react"

import { Todosinput } from "./Todosinput"

import { Todoitem } from "./Todoitem"

import { nanoid } from "nanoid"

function Todo() {
    
    const [todoList, setTodosList] = useState([]);

    const getdata = (todo) => {
        const payload = {
            title: todo,
            status: false,
            id: nanoid(4),
        }
        setTodosList([...todoList, payload])
        console.log(todoList)
    }
    const handlestatus = (id) => {
        setTodosList(todoList.map((e) => (e.id === id ? { ...e, status: !e.status } : e)))
    }
    const deleteitem = (id) => {
        const del = todoList.filter(todoList => id !== todoList.id)
        setTodosList(del)
    }

    return (
        <div>
           
            {todoList.map((e) => (

                <Todoitem deleteitem={deleteitem} handlestatus={handlestatus} todo={e}></Todoitem>
            ))}


            <Todosinput getdata={getdata} />


        </div>

    );
}
export { Todo }