import React from "react";
import { useSelector } from "react-redux";
import { selectUserData } from "Redux/selectors/getTasks";
import { Slide } from "@mui/material";

const HomePage = () => {
  const userData = useSelector(selectUserData);

  return (
    <>
      {userData.isLoggedIn ? (
        <Slide direction="down" in={true} timeout={300}>
          <h1>
            Welcome to our service, {userData.name} &#128585;. Go to the
            "contacts" tab to view your phonebook
          </h1>
        </Slide>
      ) : (
        <Slide direction="down" in={true} timeout={300}>
          <h1>
            Welcome to our service 🙊, to use the contacts you must log in if
            you already have an account or register
          </h1>
        </Slide>
      )}
    </>
  );
};

export default HomePage;