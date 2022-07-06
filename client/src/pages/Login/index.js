
import { Button, Card, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { useContext, useState } from 'react';
import { handleLogin } from '../../services/authentication';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { StoreContext } from '../../context/store';
import { CHANGE_LOGGED_IN } from '../../reducers/action';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const { isLoggedIn, setIsLoggedIn } = useContext(AuthorizationContext);
    const { globalState, setGlobalState } = useContext(StoreContext);
    const { isLoggedIn } = globalState;

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        handleLogin(email, password).then(() => {
            toast.success('Successfully logged!')
            setGlobalState({
                type: CHANGE_LOGGED_IN,
                payload: true
            })
        }).catch((error) => {
            console.log(error);
            toast.error("An error has ocurred in the login.")
        });
    }

    return (
        <>
            {isLoggedIn && <Navigate to="/dashboard"></Navigate>}
            <form onSubmit={handleSubmit}>
                <Card sx={{
                    minHeight: '500px',
                    minWidth: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '50px',
                    padding: '10px'
                }}>
                    <FormControl >
                        <InputLabel>Email address</InputLabel>
                        <Input type="email" value={email} onChange={handleChangeEmail} />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl >
                        <InputLabel>Password</InputLabel>
                        <Input type="password" value={password} onChange={handleChangePassword} />
                        <FormHelperText>Please type your password.</FormHelperText>
                    </FormControl>
                    <Button type="submit">
                        Iniciar sesion
                    </Button>
                </Card>
            </form>
        </>
    )
}