import { useState, createContext } from 'react'
import { ITodo, TodoContextType } from '@/interfaces/TodoInterfaces'
import { TaskService } from '@/services/Tasks/TaskService';
import Toast from '../utils/toast'

export const TodoContext = createContext<TodoContextType | null>(null)

interface AuxProps {
  children: React.ReactNode
}

export default function TodoProvider({children}: AuxProps){
  

  const [todos, setTodos] = useState<ITodo[]>([])
  const [title, setTitle] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data: Partial<ITodo> = {
      title: title,
      finished: false
    }

    await TaskService.create(data).then((response)=>{
      setTodos([...todos, response.data])
    }).catch((error)=>{
      Toast.error(error.message)
    })

  }

  const handleSetTodo = (todos: ITodo[]) =>{
    setTodos(todos)
  }

  const handleSetTitle = (value: string) => {
    setTitle(value)
  }

  const handleChangeCheck = async (event: React.ChangeEvent<HTMLInputElement>, data: ITodo) => {
    data.finished = !data.finished
    await TaskService.update(data)
  };

  const handleDelete = async (id: string) =>{
    
    await TaskService.delete(id).then((response) => {
      const data = response.data[0]
      const todoUpdated = todos.filter((index) => index.id !== data.id)

      setTodos(todoUpdated)
    })
  }

  return(
    <TodoContext.Provider value={{todos, handleSubmit, handleChangeCheck, handleDelete, handleSetTitle, handleSetTodo}}>
      {children}
    </TodoContext.Provider>
  )

}