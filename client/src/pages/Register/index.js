import { Button, Card, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useState, useEffect, useReducer } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getAllCharacters } from "../../services/api";
import { handleRegister } from "../../services/authentication";
import reducerFunction from "./reducer";
import { CHANGE_NAME, CHANGE_AVATAR_AND_IMAGE, CHANGE_PASSWORD, CHANGE_EMAIL, changeName, changePassword, changeEmail, changeAvatar, changeAvatarAndImage } from "./actions";
import { StoreContext } from "../../context/store";


export default function Register() {

    const { globalState } = useContext(StoreContext);
    const { isLoggedIn } = globalState;

    const [avatars, setAvatars] = useState([]);

    useEffect(() => {

        getAllCharacters()
            .then(result => {
                setAvatars(result)
            })
            .catch(error => {
                console.log(error);
            })

    }, []);
    // Si se especifica un array vacio, 
    // eso quiere decir que no depende de nada y solo se ejecuta la callback una sola vez

    /*
    Redux se compone de tres fundamentos:
       store-> es el lugar en donde se almacenara la informacion.
       acrions ->Es la primera funcion que recibe la informacion a actualizar
         -disparador de eventos para cambiar el estado.
         -Las distintas acciones para cambiar partes especificas del estado.
        
        reducers -> Es la ultima funcion que se ejecuta y recibe la informacion de las acciones y las actualiza en el store o estado.
         las distintas funciones que cambiaran el estado
    */
    const [registerState, setRegisterState] = useReducer(reducerFunction, {
        name: "",
        email: "",
        password: "",
        avatar: "",
        image: ""
    });

    const { name, email, password, avatar, image } = registerState;

    const handleSubmit = (event) => {

        event.preventDefault();

        const userData = {
            name,
            email,
            password,
            avatar,
            image,
            
        } 
        handleRegister(userData).then(() => {
            toast.success('Registered successfully!')
        }).catch((error) => {
            console.log(error);
            toast.error("An error has ocurred in the register.")
        });
    }

    const handleChangeEmail = (event) => {

        setRegisterState(changeEmail(event.target.value))
       
    };

    const handleChangePassword = (event) => {

        setRegisterState(changePassword(event.target.value))
    };

    const handleChangeName = (event) => {

        setRegisterState(changeName(event.target.value))
    };

    const handleChangeAvatar = (event) => {

        const newAvatar = event.target.value;

        const avatarObject = avatars.find((element) => {
            return element.name === newAvatar
        })

        const newImage = avatarObject.image;

        setRegisterState(changeAvatarAndImage(newAvatar,newImage));
    };


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
                    <FormControl sx={{
                        width: "50%"
                    }}>
                        <InputLabel>User name</InputLabel>
                        <Input type="text" value={name} onChange={handleChangeName} required />
                    </FormControl>
                    <FormControl sx={{
                        width: "50%"
                    }} >
                        <InputLabel>Email address</InputLabel>
                        <Input type="email" value={email} onChange={handleChangeEmail} required />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl sx={{
                        width: "50%"
                    }}>
                        <InputLabel>Password</InputLabel>
                        <Input type="password" value={password} onChange={handleChangePassword} required />
                        <FormHelperText>Please type your password.</FormHelperText>
                    </FormControl>
                    <FormControl sx={{
                        width: "50%"
                    }}>
                        <Select value={avatar} onChange={handleChangeAvatar} required>
                            {avatars.map((element) => {
                                return (
                                    <MenuItem value={element.name}>{element.name}</MenuItem>
                                )
                            })}
                        </Select>
                        <FormHelperText>Please select an avatar.</FormHelperText>
                    </FormControl>
                    <FormControl sx={{
                        width: "50%"
                    }}>
                        {
                            image.length > 0 &&
                            <img src={image}></img>
                        }
                    </FormControl>
                    <Button type="submit" sx={{
                        padding: '20px'
                    }}>
                        Registrar
                    </Button>
                </Card>
            </form>
        </>
    )
}