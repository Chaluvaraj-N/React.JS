import { useState } from "react";
import { Link } from "react-router-dom";
function ForgotPassword() {
  const [email, setEmail] = useState("");

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
      background: "orange",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div style={styles.container}>
      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="email"
          placeholder="Enter Registered Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button style={styles.button}>Reset Password</button>
      </form>
      <p style={styles.pref}>Remember your password? <link href="/login">Login</link></p>
    </div>
  );
}

export default ForgotPassword;