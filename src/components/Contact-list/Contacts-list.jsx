import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../Redux/operations/operations";
import ContactsListElement from "../Contact-list-element/Contacts-list-element";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const ContactsList = () => {
  const [open, setOpen] = useState(false);
  const [loadingContacts, setLoadingContacts] = useState([]);
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleClick = (id) => {
    setLoadingContacts((prevState) => [...prevState, id]);
    dispatch(deleteContact(id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ul>
      {filteredContacts.map((contact) => (
        <ContactsListElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        >
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={() => handleClick(contact.id)}
          >
            {loadingContacts.includes(contact.id) ? (
              <CircularProgress size={15} color="inherit" />
            ) : (
              "delete"
            )}
          </Button>
        </ContactsListElement>
      ))}
    </ul>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Contact deleted successfully!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default ContactsList;