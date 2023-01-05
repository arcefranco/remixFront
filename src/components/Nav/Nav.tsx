import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { logout } from "../../reducers/auth/authSlice";
import { RootState } from "../../store";
import { AppDispatch } from "../../store";

function Nav() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header className={styles.mainHeader}>
      <section className={styles.sectionTitle}>
        <h1>remixUp</h1>
      </section>
      <section className={styles.sectionLinks}>
        <nav className={styles.nav}>
          <div className={styles.containerLinks}>
            <Link to={"/register"} className={styles.span}>
              Register
            </Link>
            {user ? (
              <span className={styles.span} onClick={() => dispatch(logout())}>
                LogOut
              </span>
            ) : (
              <Link to={"/login"} className={styles.span}>
                Log In
              </Link>
            )}
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Nav;
