import classes from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import googleLogo from "../../assests/btn_google.png";
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
      <button onClick={loginHandler}>
        <div className={classes.ImageWrapper}>
          <img src={googleLogo} alt="google-logo" />
        </div>
        <div className={classes.Text}>SIGN IN WITH GOOGLE</div>
      </button>
    </div>
  );
};
export default Login;
