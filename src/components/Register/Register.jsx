import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, reset } from '../../reducers/auth/authSlice';
import styles from './Register.module.css'

function Register() {

const navigate = useNavigate()
const {user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth)
React.useEffect(() => {
if (isError) {
         alert(message)
        }
    
if (isSuccess && user !== null) {
        navigate('/')
        dispatch(reset())
        }

      }, [user, isError, isSuccess, message, navigate])

const dispatch = useDispatch()



const [input, setInput] = useState({
        email: '',
        username:'',
        password: ''
})

const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...input, [name]: value };
    setInput(newForm);
};
const onSubmit = async (e) => {
    e.preventDefault()
    dispatch(register(input)) 
    setInput({
        email: '',
        username:'',
        password: ''
})
           
}
    


    return (
    <div className={styles.container}>
        <div className={styles.formContainer}>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='Email'  className={styles.input}  name="email" value={input.email} onChange={handleChange} />
                <input type="text" placeholder='Username' className={styles.input} name="username" value={input.username} onChange={handleChange} />
                <input type="text" placeholder='Password' className={styles.input}  name="password" value={input.password} onChange={handleChange}/> 
                 <button type='submit'>Send</button>
            </form>
              
        </div>
        
    </div>
  )
}

export default Register