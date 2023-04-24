import styles from '@/styles/Home.module.css'
import '@fontsource/roboto/400.css';
import { Box, Paper } from '@mui/material';
import { TaskService } from '@/services/Tasks/TaskService';
import { useEffect, useState, useContext } from 'react';
import { ITodo } from '../interfaces/TodoInterfaces'
import Toast from '../utils/toast'
import { ToastContainer } from 'react-toastify';

import { FormTodo } from '../components/FormTodo/FormTodo'
import { ListTodo } from '../components/ListTodo/ListTodo'

import { TodoContext } from '@/context/TodoContext'


export default function Home() {

  const todo = useContext(TodoContext)

  useEffect(()=>{
    TaskService.list().then((response)=>{
      todo?.handleSetTodo(response.data)
    }).catch((error)=>{
      Toast.error(error.message)
    })

  },[])

  return (
    <>
      <div className={styles.container}>
        
            <Paper elevation={8} className={styles.containerSearch}>
              
              <Box className={styles.boxContainer}>
                <h1>To do list</h1>
                <FormTodo />
                <ListTodo />
              </Box>
            </Paper>

      </div>
      <ToastContainer />
    </>
  )
}
