import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    users: [],
    loading: false,
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
            state.loading = true

        },
        fetchUsersSucess: (state, action) => {
            state.users = action.payload;
            state.loading = false;
        },
        fetchUsersFailure: (state, action) => {
            console.log(action.payload)
            state.loading = false;
        },
        fetchUsersById: () => {
            console.log("Chamou no slice")
        },
        fetchUsersByIdSucces: (state, action) => {
            console.log("User do id")
            console.log(action.payload)
        },
        fetchUsersByIdFailure: (state) => {
            console.log("Deu erro no fetch")
        }
    }
})

export const { createUser, logoutUser, addAddress, deleteAddress, fetchUsers,
    fetchUsersSucess, fetchUsersFailure, fetchUsersById, fetchUsersByIdFailure, fetchUsersByIdSucces
} = userSlice.actions;
export default userSlice.reducer;