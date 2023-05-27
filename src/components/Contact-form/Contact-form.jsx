import React, { useState, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'Redux/operations/operations';
import StyledForm from '../../styled/Contact-form.styled';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { getTasks } from 'Redux/selectors/getTasks';

const ContactForm = () => {
  const [open, setOpen] = useState(false);

  const contacts = useSelector((state) => state.contacts.items);
  const userData = useSelector(getTasks);
  const dispatch = useDispatch();

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const newContact = { name: name.value, number: number.value };

    if (checkDuplicateContact(newContact)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
    setOpen(true);
    e.target.reset();
  };

  const checkDuplicateContact = (newContact) => {
    return contacts.some(
      (contact) =>
        contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Contacts</h2>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <TextField
        id="number"
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit" variant="contained">
        {userData.isLoading ? (
          <CircularProgress size={25} color="inherit" />
        ) : (
          'Add contact'
        )}
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Contact added successfully!
        </Alert>
      </Snackbar>
    </StyledForm>
  );
};

export default ContactForm;