import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "Redux/Slices/Slices";
import TextField from '@mui/material/TextField';

const ContactFilter = () => {

    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    return ( 
      <TextField 
      id="outlined-basic" 
      label="find contacts by name" 
      variant="outlined" 
      type="text"
      name="filter"
      value={filter}
      onChange={(e) => dispatch(filterContacts(e.target.value))}
      size="small" />
    )
}

export default ContactFilter;