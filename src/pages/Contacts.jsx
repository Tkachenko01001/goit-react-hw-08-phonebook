import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "Redux/operations/operations";
import ContactForm from "../components/Contact-form/Contact-form";
import ContactFilter from "../components/Contact-filter/Contact-filter";
import ContactsList from "../components/Contact-list/Contacts-list";
import { Box, Slide } from "@mui/material";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box textAlign="left">
      <h1>Phonebook</h1>
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <div>
          <ContactForm />
        </div>
      </Slide>
      <h2>Contacts</h2>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <div>
          <ContactFilter />
        </div>
      </Slide>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <div>
          <ContactsList />
        </div>
      </Slide>
    </Box>
  );
};

export default Contacts;