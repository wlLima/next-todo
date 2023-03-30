import { api } from '../api'
import { ITodo } from '../../interface/TodoInterface'

export const TaskService = {

  async create(data: object){
    return await api.post('/create', data)
  },
  
  async list(){
    const response = await api.get('/list')
    return response
  },

  async update(data: ITodo){
    const { id } = data; 
    return await api.put(`/update/${data.id}`, data)
  },

  async delete(id: string){
    return await api.delete(`/delete/${id}`)
  }
  
}

