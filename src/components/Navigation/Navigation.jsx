import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "Redux/selectors/getTasks";
import UserMenu from "components/User-menu/User-menu";
import { AppBar, Toolbar, Typography, Button, Grid } from "@mui/material";

const Navigation = () => {
  const isLoggedIn = useSelector(selectUserData);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <Button color="inherit" component={NavLink} to="/">
              Home
            </Button>
            {isLoggedIn.isLoggedIn && (
              <Button color="inherit" component={NavLink} to="/contacts">
                Contacts
              </Button>
            )}
          </Grid>
          <Grid item sx={{ flexGrow: 1 }}>
            <Typography variant="h5"  component="div" sx={{ textAlign: "center" }}>
              Phonebook
            </Typography>
          </Grid>
          <Grid item>
            {isLoggedIn.isLoggedIn ? (
              <>
                <Typography variant="subtitle1" component="div">
                  {isLoggedIn.username}
                </Typography>
                <UserMenu />
              </>
            ) : (
              <>
                <Button color="inherit" component={NavLink} to="/register">
                  Register
                </Button>
                <Button color="inherit" component={NavLink} to="/login">
                  Login
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;