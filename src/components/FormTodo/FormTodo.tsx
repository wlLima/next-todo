import { TextField, FormControl, Button } from '@mui/material';
import styles from '../FormTodo/FormTodo.module.css'


interface PropsInterface{
  handleSubmit: (event: React.FormEvent<HTMLFormElement>)=> void;
  setTitle: (value: string) => void;
}

export const FormTodo = (props: PropsInterface) =>{
  return (

    <form onSubmit={(event)=> props.handleSubmit(event)} className={styles.formSubmit}>

      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField 
          id="outlined-basic" 
          label="Escreva uma tarefa" 
          variant="outlined" 
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setTitle(event.target.value)
          }
        } />
      </FormControl>
      
      <FormControl fullWidth sx={{ m: 1 }}>
        <Button variant="contained" type='submit'>Adicionar</Button>
      </FormControl>
    </form>
  )
}

