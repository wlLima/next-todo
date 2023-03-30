import styles from '@/styles/Home.module.css'
import '@fontsource/roboto/400.css';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Paper, TextField, FormControl, Button, Checkbox, IconButton} from '@mui/material';
import {TaskService} from '@/services/Tasks/TaskService';
import { useEffect, useState } from 'react';
import { ITodo } from '../interface/TodoInterface'


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
         <Box>
            <Paper elevation={8} className={styles.containerSearch}>
              
              <Box className={styles.boxContainer}>
                <h1>To do list</h1>
               
               <form onSubmit={(event)=> handleSubmit(event)} className={styles.formSubmit}>

                <FormControl fullWidth sx={{ m: 1 }}>
                  <TextField 
                    id="outlined-basic" 
                    label="Escreva uma tarefa" 
                    variant="outlined" 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setTitle(event.target.value)
                      }
                    } />
                </FormControl>
                
                <FormControl fullWidth sx={{ m: 1 }}>
                  <Button variant="contained" type='submit'>Adicionar</Button>
                </FormControl>
               </form>
              
                {
                  todo.length > 0 ? todo.map((todos: ITodo)=>{
  
                    return(
                      <Box key={todos.id} className={styles.boxTask}>
                        <Box>
                          <Checkbox onChange={(event)=> handleChangeCheck(event, todos)}/>
                          {todos.finished ? <span><s>{todos.title}</s></span> : <span>{todos.title}</span>}
                        </Box>
                        <IconButton aria-label="delete" size="large" onClick={()=> handleDelete(todos.id)}>
                          <DeleteIcon fontSize="inherit"/>
                        </IconButton>
                      </Box>
                    ) 
                  }) : <h4>Nenhuma tarefa encontrada, adicione uma agora mesmo!</h4>
                }
               
            </Box>

            </Paper>
         </Box>
      </div>
    </>
  )
}
