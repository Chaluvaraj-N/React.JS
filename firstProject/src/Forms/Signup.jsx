import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      background: "green",
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div style={styles.container}>
      <h2>Signup</h2>

      <form onSubmit={handleSignup}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <input
          style={styles.input}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <button style={styles.button}>Signup</button>
      </form>
      <p style={styles.pref}>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Signup;