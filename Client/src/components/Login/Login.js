import classes from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  const loginHandler = () => {
    // instance.get("/auth/google").then((res) => {
    //   console.log(res);
    // });
    // navigate(`${process.env.REACT_APP_BASE_URL}/auth/google`);
    window.location.href = `${process.env.REACT_APP_BASE_URL}/auth/google`;
  };

  return (
    <div className={classes.Header}>
      <button onClick={loginHandler}>Login with Google</button>
    </div>
  );
};
export default Login;
