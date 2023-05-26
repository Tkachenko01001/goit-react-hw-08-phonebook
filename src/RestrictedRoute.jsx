import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserData } from "Redux/selectors/getTasks";

const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {
    
    const isLoggedIn = useSelector(selectUserData)
    return isLoggedIn.isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;