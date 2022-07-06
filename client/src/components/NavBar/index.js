import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from'./index.module.css'
import { Link } from 'react-router-dom';
import { CHANGE_LOGGED_IN} from '../../reducers/action';
import { StoreContext } from '../../context/store';
import { saveToken } from '../../services/authentication';
import { useContext } from "react";
export default function NavBar() {
  const { globalState, setGlobalState } = useContext(StoreContext);
  const { isLoggedIn} = globalState;

  const handleLogout = () => {
    // setIsLoggedIn(false);
    setGlobalState({
      type: CHANGE_LOGGED_IN,
      payload: false
    })
    saveToken("");
  }
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" color="secondary"> <Link className={styles['navbar-link']}  to="/">MY APP</Link></Button>
     
      {
        !isLoggedIn && <>
       <Button variant="contained">
         <Link className={styles['navbar-link']}  to="/login">Login</Link> 
        </Button>
       <Button variant="contained">
       <Link className={styles['navbar-link']}  to="/register">Register</Link> 
       </Button>
       </>
      }
      {
        isLoggedIn && <>
       <Button variant="contained">
      <Link className={styles['navbar-link']} to="/dashboard">Dashboard</Link> 
      </Button>
      <Button variant="contained">
      <Link className={styles['navbar-link']} to="/logout">Logout</Link> 
      </Button>
      </>
      }
    </Stack>
  );
}
