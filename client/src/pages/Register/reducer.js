import { CHANGE_AVATAR_AND_IMAGE, CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASSWORD } from "./actions";

/*

    Requisitos para las funciones reductoras

    -> Siempre debe devolver el estado
    -> Tiene que ser una funcion pura

        Una funcion pura es aquella que sus valores de entrada (parametros) no son alterados en la funcion

*/
export default function reducerFunction(state, action) {

    // console.log(state);
    // console.log(action);

    switch (action.type) {
        case CHANGE_PASSWORD:
            // state.password = action.payload; // Esto no hace una funcion pura
            return {
                ...state,
                password: action.payload
            }
        case CHANGE_AVATAR_AND_IMAGE:
            return {
                ...state,
                avatar: action.payload.avatar,
                image: action.payload.image
            }
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        default:
            return state;
    }
}