import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault();
        if(!todo) return
        // addTodo({id: Date.now(), todo: todo, completed: false})
        addTodo({todo, completed: false})   // see the commented line above, generally we have to write like this but since we have given the
                                            // "id = Date.now()" in the addTodo() method implementation itself in App.jsx so we don't need to pass it here.
        setTodo("") // to empty the field
    }                                       

    

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
