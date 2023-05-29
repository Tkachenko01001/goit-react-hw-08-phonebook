import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "Redux/operations/operations";
import { selectUserData } from "Redux/selectors/getTasks";
import { TextField, Button, Box, Slide } from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);

      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    setSubmitted(true);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Slide direction="right" in={!userData.isLoggedIn} timeout={500}>
        <form
          onSubmit={handleSubmit}
          style={{ border: "1px solid #ccc", padding: "20px" }}
        >
          <Box display="flex" flexDirection="column" gap={3}>
            <h2>Register</h2>
            <TextField
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={handleChange}
              required
              variant="outlined"
              error={submitted && userData.isError}
              helperText={submitted && userData.isError ? "Incorrect entry." : ""}
            />

            <TextField
              type="text"
              name="name"
              label="Name"
              value={name}
              onChange={handleChange}
              required
              variant="outlined"
            />

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
              Register
            </Button>
          </Box>
        </form>
      </Slide>
    </Box>
  );
};

export default Register;