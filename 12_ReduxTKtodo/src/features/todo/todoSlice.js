import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Go to gym"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {   // state represents the current state, action represents the value/data passed
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {    // state represents the current state, action represents the value/data passed i.e., id
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, text: action.payload.text} : todo)
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer