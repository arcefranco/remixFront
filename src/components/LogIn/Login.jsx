import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
/* import { login } from '../../reducers/userReducer' */
import { useGetUsersQuery } from '../../reducers/apiUserSlice'
import { fetchUser } from '../../reducers/userReducer'
import { useState } from 'react'
import styles from './Login.module.css'
const Login = () => {
    const dispatch = useDispatch()
    const {data: data,
        isLoading,
        isSuccess,
        isError,
        error} = useGetUsersQuery()
        const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        const newForm = { ...input, [name]: value };
    
        setInput(newForm);
    
      };
      let content; 
      if(isLoading){
        content = <p>Cargando...</p>
      } else if (isSuccess){
       /*  content = <p>{JSON.stringify(data)}</p> */
       content = data.map(e => {
            return(
                <div>
                    <p>{e.username}</p>
                </div>
            )
      })
      }else if (isError){
        content = <p>{error}</p>
      }

  return (
    <div className={styles.container}>
       
        
        <form action="" className={styles.form}>
             <h1>Login</h1>
            <input type="text" value={input.email} name='email' onChange={handleChange} placeholder='Email' />
            <input type="password" value={input.password} name='password' onChange={handleChange} placeholder='Contraseña' />
            
            <button onClick={() => dispatch(fetchUser())}>Enviar</button>
        </form>
        {content}
        </div>
  )
}

export default Login