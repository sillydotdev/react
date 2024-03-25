import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)) // remember to always use filter() when you want to delete. This will filter all the todos
  }                                                           // that don't match the "id". filter() works with true statement hence "!=="

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }

  // adding to local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  //adding new todo to local storage as well
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))  // setItem always takes key and a value and the value is always a string
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">  {/* When loop[ing like this, it is recommende to always use "key" for each item to uniquely identify it */}
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
