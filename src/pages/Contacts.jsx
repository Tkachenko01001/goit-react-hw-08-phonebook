import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "Redux/operations/operations";
import ContactForm from "../components/Contact-form/Contact-form";
import ContactFilter from "../components/Contact-filter/Contact-filter";
import ContactsList from "../components/Contact-list/Contacts-list";
import { Box, Slide, Grid, Divider } from "@mui/material";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box textAlign="left">
      <h1>Phonebook</h1>
      <Grid container spacing={15}>
        <Grid item xs={6}>
          <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <div>
              <ContactForm />
            </div>
          </Slide>
        </Grid>
        <Grid item xs={6}>
        <Box sx={{ padding: '20px',
         width: '100%',
         height: '257px',
         overflowY: 'auto',
         maxWidth: '350px',
         border: '1px solid #ccc',
         borderRadius: '4px',
         boxShadow: '0 2px 4px rgba(0, 0, 0, .3)' }}>
          <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <div>
              <ContactFilter />
              <ContactsList />
            </div>
          </Slide>
        </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contacts;
