import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import WeatherContext from "../../contexts/WeatherContext";
import { Button, InputFieldWrapper, LoginForm } from "./home.styles";
import { formFields } from "../../constants/FormFields";

const Home = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const { userData, setUserData } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { error } = handleErrors();
    if (error) {
      toast.error(error.password, {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-message",
      });
      setIsLogin(false);
    } else {
      setIsLogin(true);
      console.log("login");
      toast.success("User Login Successfully.");
    }
    console.log("errorerrorerror", error);
  };

  const handleErrors = () => {
    const { username, password } = loginData;
    let errors = {};

    // Validate username
    if (!username) {
      errors.username = "Username is required";
    }

    // Validate password
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6 || password.length > 12) {
      errors.password = "Password must be between 6 and 12 characters long";
    } else {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
      if (!passwordRegex.test(password)) {
        errors.password =
          "Password must contain at least one uppercase letter, one lowercase letter, one special character, and one numeric value";
      }
    }

    return errors;
  };

  const handleNext = () => {
    navigate("/dashboard");
  };

  const checkEmptyFields = () => {
    return !(loginData.username && loginData.password);
  };

  useEffect(() => {
    if (isLogin && loginData) {
      setUserData({
        ...userData,
        username: loginData.username,
        password: loginData.password,
      });
    }
  }, [isLogin]);

  useEffect(() => {
    if (userData && userData.username && userData.password) {
      setLoginData({
        username: userData.username,
        password: userData.password,
      });
    }
  }, []);
 
  return (
    <div>
      <h2>Weather App</h2>
      <LoginForm>
        <h2>Login</h2>
        <h5>Please enter your Login and your password</h5>
        <form onSubmit={!isLogin && handleSubmit}>
          {formFields.map((field) => {
            const { name, placeholder, type } = field;
            return (
              <InputFieldWrapper>
                <input
                  required
                  type={type}
                  name={name}
                  value={loginData[name]}
                  placeholder={placeholder}
                  onChange={(e) =>
                    setLoginData({ ...loginData, [name]: e.target.value })
                  }
                  error={handleErrors}
                />
              </InputFieldWrapper>
            );
          })}
          {isLogin ? (
            <Button onClick={() => handleNext()}>Continue</Button>
          ) : (
            <Button type="submit" disabled={checkEmptyFields}>
              Login
            </Button>
          )}
        </form>
      </LoginForm>
      <ToastContainer />
    </div>
  );
};

export default Home;
