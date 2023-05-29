import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "pages/Layout";
import { refreshCurrentUser } from "Redux/operations/operations";
import PrivateRoute from "PrivatRoute";
import RestrictedRoute from 'RestrictedRoute';
import { selectUserData } from "Redux/selectors/getTasks";

const HomePage = lazy(()=> import('pages/HomePage'));
const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(()=> import('../../pages/Register'));
const Login = lazy(()=> import('../../pages/Login'));
const NotFound = lazy(()=> import('../../pages/Not-Found'));

const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(selectUserData);

  useEffect(() => {
    dispatch(refreshCurrentUser())
  }, [dispatch])

  return (
    <>
     {!refresh.isRefreshing && (
      <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<HomePage />} />

      <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/" component={<Register />} />
          }
        />

      <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />

      <Route 
          path="/contacts" 
          element={
          <PrivateRoute redirectTo='/login' component={<Contacts />} />
          } 
        />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
     )}
    </>
  );
};

export default App;
