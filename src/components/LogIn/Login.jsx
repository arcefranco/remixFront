import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { login, reset } from '../../reducers/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'




const Login = () => {
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth   )
    const navigate = useNavigate()    
        
    React.useEffect(() => {
        if (isError) {
         alert(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
        
    const [input, setInput] = useState({
    email: '',
    password: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        const newForm = { ...input, [name]: value };
        setInput(newForm);
    };
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(input))
      }





  return (
    <div className={styles.container}>
       
        
        <form className={styles.form}>
             <h1>Login</h1>
            <input type="text" value={input.email} name='email' onChange={handleChange} placeholder='Email' />
            <input type="password" value={input.password} name='password' onChange={handleChange} placeholder='Contraseña' />
            
            <button onClick={onSubmit}>Enviar</button>
        </form>

        </div>
  )
}

export default Login