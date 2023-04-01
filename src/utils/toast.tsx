import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Toast = {

  success(text: string){
    toast.success(text)
  },

  error(text: string){
    toast.error(text)
  },

  warning(text: string){
    toast.warning(text)
  },

  info(text: string){
    toast.info(text)
  },

  default(text: string){
    toast(text)
  }

}

export default Toast