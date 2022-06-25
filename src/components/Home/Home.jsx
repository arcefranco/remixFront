import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe, logout} from '../../reducers/auth/authSlice'


function Home() {
    const dispatch = useDispatch()
    const user = useSelector(state=> state.auth.user)
    const navigate = useNavigate() 

  return (
    <div>
        <h1>Home</h1>
        <button onClick={() => dispatch(getMe(user))}>Get my info!</button>
        {
          user && 
           
               <div>
                <p>{user.username}</p>
                <p>{user.imgUrl}</p>
              </div>
            
           
         
            
             
          }
          <button onClick={() => dispatch(logout())}>logOut</button>
         <button onClick={() => navigate('/login')} >login</button>
          
        
    </div>
  )
}

export default Home