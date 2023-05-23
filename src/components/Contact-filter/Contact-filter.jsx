import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "Redux/Slices/Slices";
import { Label, Input } from "../../styled/style.styled";

const ContactFilter = () => {

    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    return (
        <Label>
        find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={(e) => dispatch(filterContacts(e.target.value))}/>
      </Label>
    )
}

export default ContactFilter;