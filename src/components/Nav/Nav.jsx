import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
import { logout} from '../../reducers/auth/authSlice'


function Nav() {
    const dispatch = useDispatch()
    const user = useSelector(state=> state.auth.user)


  return (
    <header className={styles.mainHeader}>
      <section>
        <h1>remixUp</h1>
      </section>
      
      <nav className={styles.nav}>
        <div className={styles.containerLinks}>
            <Link to={'/profile'} style={{cursor: 'pointer', color:'white'}}>Profile</Link>
            {
                user ? <span style={{cursor: 'pointer'}} onClick={()=> dispatch(logout())}>LogOut</span> : <Link to={'/login'} style={{cursor: 'pointer',color:'white'}}>LogIn</Link>
            }
            
     </div>
    </nav>
    </header>
    
  )
}

export default Nav