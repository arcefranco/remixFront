import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import CSSModules from 'react-css-modules'
import img from '../../assets/carefree-african-american-man-listening-music-headphones-singing-mobile-phone-as-microphone-standing-pink-background_1258-77231.jpg'
import { login, reset } from '../../reducers/auth/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'




const Login = () => {
    const dispatch = useDispatch()
    const {user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth)
    const navigate = useNavigate()    
        
    React.useEffect(() => {
        if (isError) {
         alert(message)
        }
    
        if (isSuccess && user !== null) {
          navigate('/')
          dispatch(reset())
        }

      }, [user, isError, isSuccess, message, navigate])
        
    const [input, setInput] = useState({
    email: '',
    password: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        const newForm = { ...input, [name]: value };
        setInput(newForm);
    };
    const onSubmit = async (e) => {
        e.preventDefault()
        dispatch(login(input))
       
      }





  return (
    <div className={styles.container}>
       <div className={styles.formsContainer}>
        <div className={styles.signinSignup}>
            <form className={styles.signInForm}>
             <h1 className={styles.title}>Sign in</h1>
            <div className={styles.inputField}>
            <i className="fas fa-user"></i>
            <input type="text" value={input.email} name='email' onChange={handleChange} placeholder='Email' />

            </div>

            <div className={styles.inputField}>

            <i className="fas fa-lock"></i>
            <input type="password" value={input.password} name='password' onChange={handleChange} placeholder='Password' />
            
            </div>
            <button className={styles.btn} onClick={onSubmit}>Send</button>
        </form>
        </div>
        <div className={styles.panelsContainer}>
        <div className={`${styles.panel} ${styles.leftPanel}`}>


            <div className={styles.content}>
              <h3>New here?</h3>
              <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Enim ipsa recusandae quos laboriosam. 
                 Esse quasi sed repellat deleniti, molestias explicabo l
                 audantium culpa id eos expedita labore poss
                imus alias? Ducimus, enim.</p>
                
                  
                  <Link to={'/register'}>
                    <button className={`${styles.btn} ${styles.transparent}`}>
                  Register
                      </button>
                      </Link>
                  
            
            </div>

          </div>
          <img className={styles.image} src="https://cdn.pixabay.com/photo/2016/11/09/23/16/music-1813100_960_720.png "alt="" />
        </div>
   
       </div>
        
        
    </div>
      
  )
}

export default  CSSModules(Login, styles, {allowMultiple: true}) 