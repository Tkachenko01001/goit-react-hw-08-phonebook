import { useSelector, useDispatch } from "react-redux";
import { addContact } from "Redux/operations/operations";
import { Form, Button, Label, Input } from "../../styled/style.styled";

const ContactForm = () => {

    const contacts = useSelector((state) => state.contacts.items);
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault();
      const { name, number } = e.target.elements;
      const newContact = { name: name.value, number: number.value };

      if (checkDuplicateContact(newContact)) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }

      dispatch(addContact(newContact));
      e.target.reset();
    };

    const checkDuplicateContact = (newContact) => {
      return contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
    };


    return (
        <Form onSubmit={handleSubmit}>
        <h2>Contacts</h2>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button>Add contact</Button>
      </Form>
    )
}

export default ContactForm;