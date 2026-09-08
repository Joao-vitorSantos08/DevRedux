import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    users: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action) => {

            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    address: null
                }
            }

        },
        logoutUser: (state) => {
            return {
                ...state,
                user: null,

            }
        },
        addAddress: (state, action) => {
            if (action.payload.location === "" || action.payload.name === "") {
                alert("Preencha todos os campo")
                return { ...state }
            }

            if (state.user === null) {
                alert("Faça login para cadastra um endereço")
                return { ...state }
            }

            alert("Dados atualizados")

            return {
                ...state,
                user: {
                    ...state.user,
                    address: {
                        location: action.payload.location,
                        number: action.payload.number,
                    }
                }
            }
        },
        deleteAddress: (state) => {
            return {
                ...state,
                user: {
                    ...state.user,
                    address: null,
                }
            }
        },
        fetchUsers: (state) => {
            console.log("Chamou o fetch")
        }
    }
})

export const { createUser, logoutUser, addAddress, deleteAddress, fetchUsers} = userSlice.actions;
export default userSlice.reducer;