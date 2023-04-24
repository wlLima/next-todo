import { Box, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../ListTodo/ListTodo.module.css'
import { useContext, useEffect } from 'react';
import { TodoContext } from '@/context/TodoContext'

export const ListTodo = (props: any) => {

  const todo = useContext(TodoContext)

  useEffect(()=>{
  },[todo?.todos])

  return (
    <>
      {
        todo?.todos !== undefined &&
        todo?.todos.length > 0 ? todo.todos.map((todos)=>{

            return (
              
                <Box key={todos.id} className={styles.boxTask}>
                  <Box className={styles.textLength}>
                    <Checkbox onChange={(event)=> todo?.handleChangeCheck(event, todos)}/>
                    {todos.finished ? <span><s>{todos.title}</s></span> : <span>{todos.title}</span>}
                  </Box>
                  <IconButton aria-label="delete" size="large" onClick={()=> todo?.handleDelete(todos.id)}>
                    <DeleteIcon fontSize="inherit"/>
                  </IconButton>
                </Box>
           
            )
        }) : <h4 className={styles.alertText}>Nenhuma tarefa encontrada, adicione uma agora mesmo!</h4>
        
      }
       
    </>
  )
}