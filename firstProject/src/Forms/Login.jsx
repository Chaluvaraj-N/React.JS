import { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    container: {
      width: "350px",
      margin: "30px auto",
      padding: "20px",
      border: "1px solid gray",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0 0 10px lightgray",
    },
    input: {
      width: "90%",
      padding: "10px",
      margin: "10px 0",
    },
    button: {
      width: "95%",
      padding: "10px",
      background: "blue",
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
    },
     pref:{
        marginTop: "10px",
        fontSize: "14px",
        color: "gray",
        textDecoration: "underline",

    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          style={styles.input}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
<p style={styles.pref}><a href="/forgot-password">Forgot Password?</a></p>
        <button style={styles.button}>Login</button>
      </form>
      <p style={styles.pref}>Don't have an account? <link href="/signup">Sign up</link></p>
    </div>
  );
}

export default Login;