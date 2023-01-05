import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { register, reset } from "../../reducers/auth/authSlice";
import Swal from "sweetalert2";
import { AppDispatch } from "../../store";
import { User } from "../types/User";
import { RootState } from "../../store";
import styles from "./Register.module.css";

function Register() {
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );
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
        title: "You have successfully registered and logged in",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, navigate]);

  const dispatch = useDispatch<AppDispatch>();

  const [input, setInput] = useState<User>({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newForm = { ...input, [name]: value };
    setInput(newForm);
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register(input));
    setInput({
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className={styles.animateContainer}>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit} style={{ zIndex: "1" }}>
          <button className={styles.btn} style={{ zIndex: "1" }}>
            <Link to={"/login"} style={{ color: "white" }}>
              <i className="fas fa-arrow-left"></i> Back
            </Link>
          </button>
          <input
            type="text"
            placeholder="Email"
            className={styles.input}
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Username"
            className={styles.input}
            name="username"
            value={input.username}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            className={styles.input}
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          <button type="submit" className={styles.btn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
