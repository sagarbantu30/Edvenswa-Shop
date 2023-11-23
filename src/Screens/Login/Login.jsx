import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import user_icon from "../../Assets/Person.png";
import psw_icon from "../../Assets/password.png";
import img from "../../Assets/test.jpg";
import { AUTH } from "../../network/endpoints";
import { clientPost } from "../../network/client";

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const formsubmit = async (e) => {
    e.preventDefault();
    const body = {
      username: username,
      password: password,
    };
    await clientPost(AUTH, body)
      // .then((resp) => {
      //   console.log(resp.data)
      //   alert('successfully loggedIn')
      // })
      .then((Response) => {
        console.log(Response.data);

        const { email, firstName, image, token } = Response.data;
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("image", image);
        sessionStorage.setItem("token", token); // Save the token

        navigate("/Home");
      })
      .catch((error) => {
        console.log(error);
        // console.log(err.resp)
        // alert(err.resp.data.error.message)
      });
  };

  return (
    <div className="container">
      <div className="body">
        <div className="content">
          <img src={img} alt="" />
        </div>
        <div className="myform">
          <h1>login</h1>
          <form onSubmit={formsubmit}>
            <div className="usnm">
            <img src={user_icon} alt="" />
            <input
              type="text"
              onChange={(e) => setusername(e.target.value)}
              placeholder="username"
              value={username}
              name="username"
              autoComplete="off"
              required
            />
            </div>
            <div className="pswd1">
            <img src={psw_icon} alt="" />
            <input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              placeholder="password"
              name="password"
              autoComplete="off"
              value={password}
              required
            />
            </div>
            <div className="forgot-password">
              forgot password<span>!</span>
            </div>
            <button className="btn">login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
