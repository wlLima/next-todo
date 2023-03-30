import styles from '@/styles/Home.module.css'
import '@fontsource/roboto/400.css';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Paper, TextField, FormControl, Button, Checkbox, IconButton} from '@mui/material';


export default function Home() {
  return (
    <>
      <div className={styles.container}>
         <Box>
            <Paper elevation={8} className={styles.containerSearch}>
              
              <Box className={styles.boxContainer}>
                <h1>To do list</h1>
               
                <FormControl fullWidth sx={{ m: 1 }}>
                  <TextField id="outlined-basic" label="Escreva uma tarefa" variant="outlined" />
                </FormControl>
                
                <FormControl fullWidth sx={{ m: 1 }}>
                  <Button variant="contained">Adicionar</Button>
                </FormControl>

                <Box className={styles.boxTask}>
                  <Checkbox />
                  <span>Limpar a casa</span>
                  <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </Box>
               
              </Box>

              
            
            </Paper>
         </Box>
      </div>
    </>
  )
}
