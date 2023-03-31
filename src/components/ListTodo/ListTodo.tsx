import { Box, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../ListTodo/ListTodo.module.css'

export const ListTodo = (props: any) => {

  const {id, finished, title } = props.todos

  return (
    <Box key={id} className={styles.boxTask}>
      <Box>
        <Checkbox onChange={(event)=> props.handleChangeCheck(event, props.todos)}/>
        {finished ? <span><s>{title}</s></span> : <span>{title}</span>}
      </Box>
      <IconButton aria-label="delete" size="large" onClick={()=> props.handleDelete(id)}>
        <DeleteIcon fontSize="inherit"/>
      </IconButton>
    </Box>
  )
}