import PropTypes from "prop-types";
import { ListElement } from "../../styled/style.styled";

const ContactsListElement = ({id, name, number, children}) => {

    return (
        <ListElement key={id}>{name}: {number} {children}</ListElement>
    )

}

ContactsListElement.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default ContactsListElement;