import React, { useRef, useContext } from 'react'
import { TodosContext } from '../store/todos-context'

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)
  const todosCtx = useContext(TodosContext)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = todoTextInputRef.current!.value

    if(enteredText.trim().length === 0){
      // throw an error
      return
    }

    todosCtx.addTodo(enteredText);
  }

  return(
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;