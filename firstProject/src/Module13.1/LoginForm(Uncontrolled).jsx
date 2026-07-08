import { useRef, useState } from "react";

function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let newErrors = {};

    // Email Validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Invalid Email Format";
    }

    // Password Validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage("");
      return;
    }

    setErrors({});
    setMessage("Login Successful");

    console.log({
      email,
      password,
    });

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        boxShadow: "0px 0px 10px gray",
        borderRadius: "10px",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Uncontrolled Login Form
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}

        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>

          <input
            type="text"
            ref={emailRef}
            placeholder="Enter Email"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
            }}
          />

          {errors.email && (
            <p style={{ color: "red" }}>
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>

          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter Password"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
            }}
          />

          {errors.password && (
            <p style={{ color: "red" }}>
              {errors.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      {message && (
        <h3
          style={{
            color: "green",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {message}
        </h3>
      )}
    </div>
  );
}

export default LoginForm;