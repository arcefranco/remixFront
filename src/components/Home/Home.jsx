import React from 'react'
import { useSelector, useDispatch } from 'react-redux'




function Home() {
    const dispatch = useDispatch()
    const user = useSelector(state=> state.auth.user)


  return (
    <div>
        <h1>Home</h1>
        {
          user && 
           
               <div>
                <p>{user.username}</p>
                <p>{user.imgUrl}</p>
              </div>
            
           
         
            
             
          }
         

          
        
    </div>
  )
}

export default Home