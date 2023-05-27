import React from "react";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import { ListElement } from "styled/List-element.styled";

const ContactsListElement = ({ id, name, number, children }) => {
  return (
    <>
      <ListElement key={id}>
        {name}: {number} {children}
      </ListElement>
      <Divider />
    </>
  );
};

ContactsListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContactsListElement;