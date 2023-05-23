import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../Redux/operations/operations";
import ContactsListElement from "../Contact-list-element/Contacts-list-element";
import { Button } from "../../styled/style.styled";

const ContactsList = () => {

    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul>
         {filteredContacts.map((contact) => (
        <ContactsListElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}>
        <Button onClick={() => dispatch(deleteContact(contact.id))}>Delete</Button>
        </ContactsListElement>
      ))}
      </ul>
    )
}

export default ContactsList;