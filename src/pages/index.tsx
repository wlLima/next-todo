import styles from '@/styles/Home.module.css'
import '@fontsource/roboto/400.css';
import { Box, Paper } from '@mui/material';
import { TaskService } from '@/services/Tasks/TaskService';
import { useEffect, useState } from 'react';
import { ITodo } from '../interfaces/TodoInterfaces'

import { FormTodo } from '../components/FormTodo/FormTodo'
import { ListTodo } from '../components/ListTodo/ListTodo'


export default function Home() {

  const [todo, setTodo] = useState<ITodo[]>([])
  const [title, setTitle] = useState('')

  useEffect(()=>{
    TaskService.list().then((response)=>{
      setTodo(response.data)
    })
  },[todo])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data: Partial<ITodo> = {
      title: title,
      finished: false
    }

    const result = await TaskService.create(data).then((response)=>{
      return response.data
    })

    setTodo([...todo, result])
  }

  const handleChangeCheck = async (event: React.ChangeEvent<HTMLInputElement>, data: ITodo) => {
    data.finished = !data.finished
    await TaskService.update(data)
  };

  const handleDelete = async (id: string) =>{
    await TaskService.delete(id)
  }

  return (
    <>
      <div className={styles.container}>
        
            <Paper elevation={8} className={styles.containerSearch}>
              
              <Box className={styles.boxContainer}>
                <h1>To do list</h1>
                <FormTodo handleSubmit={handleSubmit} setTitle={setTitle} />
               
                {
                  todo.length > 0 ? todo.map((todos: ITodo)=>{
                    return(<ListTodo todos={todos} handleChangeCheck={handleChangeCheck} handleDelete={handleDelete} />) 
                  }) : <h4 className={styles.alertText}>Nenhuma tarefa encontrada, adicione uma agora mesmo!</h4>
                }
               
              </Box>
            </Paper>

      </div>
    </>
  )
}
