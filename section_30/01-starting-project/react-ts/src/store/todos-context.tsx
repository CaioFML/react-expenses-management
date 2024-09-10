import Todo from "../models/todo"
import React, { useState } from "react"

type TodosContextObj = {
  items: Todo[],
  addTodo: (text: string) => void,
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {}
})

const TodosContextProvider = ({children}: {children: React.ReactNode}) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text)
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    })
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }

  return(
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider