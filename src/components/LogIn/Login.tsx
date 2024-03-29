import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2";
import styles from "./Login.module.css";
import { login, reset } from "../../reducers/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { User } from "../types/User";
import { AppDispatch } from "../../store";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(reset());
    if (isError) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
      });
    }

    if (isSuccess && user !== null) {
      Swal.fire({
        icon: "success",
        title: "You have successfully logged in",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, navigate]);

  const [input, setInput] = useState<User>({
    email: "",
    password: "",
  });

  const [isActive, setIsActive] = useState(true);

  const onClick = () => {
    setIsActive((current) => !current);
    setTimeout(() => {
      navigate("/register");
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newForm = { ...input, [name]: value };
    setInput(newForm);
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(input));
  };

  return (
    <div className={isActive ? styles.container : `${styles.animateContainer}`}>
      <div className={styles.formsContainer}>
        <div className={styles.signinSignup}>
          <form className={styles.signInForm}>
            <h1 className={styles.title}>Sign in</h1>
            <div className={styles.inputField}>
              <i className="fas fa-user"></i>
              <input
                type="text"
                value={input.email}
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />
            </div>

            <div className={styles.inputField}>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={input.password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <button className={styles.btn} onClick={onSubmit}>
              Send
            </button>
          </form>
        </div>
        <div className={styles.panelsContainer}>
          <div className={`${styles.panel} ${styles.leftPanel}`}>
            <div className={styles.content}>
              <h3>New here?</h3>
              <p>Sign up and start to upload all your music!</p>
              <button
                className={`${styles.btn} ${styles.transparent}`}
                onClick={() => onClick()}
                id="sign-up-btn"
              >
                Register
              </button>
            </div>
          </div>
          <img
            className={styles.image}
            src="https://cdn.pixabay.com/photo/2016/11/09/23/16/music-1813100_960_720.png "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
