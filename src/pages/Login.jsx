import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "Redux/operations/operations";
import { TextField, Button, Box, Slide } from "@mui/material";
import { selectUserData } from "Redux/selectors/getTasks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setSubmitted(true);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Slide direction="left" in={!userData.isLoggedIn} timeout={500}>
        <form
          onSubmit={handleSubmit}
          style={{ border: "1px solid #ccc", padding: "20px" }}
        >
          <Box display="flex" flexDirection="column" gap={3}>
            <h2>Login</h2>
            
            <TextField
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={handleChange}
              required
              variant="outlined"
              error={submitted && userData.isError}
              helperText={submitted && userData.isError ? "Incorrect entry." : ""}/>

            <TextField
              type="password"
              name="password"
              label="Password"
              value={password}
              onChange={handleChange}
              required
              variant="outlined"
              error={submitted && userData.isError}
              helperText={submitted && userData.isError ? "Incorrect entry." : ""}
            />

            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Box>
        </form>
      </Slide>
    </Box>
  );
};

export default Login;