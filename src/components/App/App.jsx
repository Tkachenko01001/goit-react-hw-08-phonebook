import ContactForm from "../Contact-form/Contact-form";
import ContactFilter from "../Contact-filter/Contact-filter";
import ContactsList from "../Contact-list/Contacts-list";
import { Div } from 'styled/style.styled';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "Redux/operations/operations";
import { getTasks } from "../../Redux/selectors/getTasks";

const App = () => {
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactsList />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </Div>
  );
};

export default App;