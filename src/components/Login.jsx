import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;

    let obj = { number, password };

    await fetch(`https://famous-mite-clothes.cyclic.app/users`)
      .then((res) => res.json())
      .then((res) => {
        let isMatch = false;
        res.forEach((el) => {
          if (el.number === obj.number && el.password === obj.password) {
            isMatch = true;
            alert("login successful");
            navigate("/addtask");
          } else if (
            (el.number === "" && el.password === " ") ||
            (obj.number === "" && obj.password === "")
          ) {
            alert("Credential required");
          } else if (!isMatch) {
            alert("Login Failed");
          }
        });
      });
   
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <div
        style={{
          padding: "20px",
          height: "250px",
          width: "50%",
          marginLeft: "400px",
          marginTop: "60px",
        }}
      >
        <form>
          <input
            style={{
              width: "90%",
              height: "40px",
              backgroundColor: "whitesmoke",
              marginTop: "10px",
              fontSize: "20px",
              borderRadius: "10px",
            }}
            type="number"
            id="number"
            placeholder="mobile number"
          />
          <input
            style={{
              width: "90%",
              height: "40px",
              backgroundColor: "whitesmoke",
              marginTop: "10px",
              fontSize: "20px",
              borderRadius: "10px",
            }}
            type="password"
            id="password"
            placeholder="password"
          />

          <input
            style={{
              cursor: "pointer",
              fontSize: "20px",
              backgroundColor: "black",
              color: "white",
              border: "1px solid black",
              textAlign: "center",
              width: "30%",
              height: "40px",
              marginTop: "22px",
              marginLeft: "30%",
              borderRadius: "10px",
            }}
            value="Login"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </>
  );
};

export default Login;
