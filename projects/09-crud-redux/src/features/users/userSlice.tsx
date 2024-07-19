import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { UserId, UserWithId } from "../../types";

const DEFAULT_STATE: UserWithId[] = []

/* const DEFAULT_STATE = [
    {
        id: "1",
        name: 'Jane Smith',
        email: "jane@gmail.com",
        github: "jane12"
    },
    {
        id: "2",
        name: 'Jhon Doe',
        email: "joee@gmail.com",
        github: "joe13"
    }
] */

const initialState: UserWithId[] = (() => {
    const persistedState = localStorage.getItem("__redux__state__")
    // console.log(persistedState)
    return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE
})()

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<UserWithId>) => {
            /* const newUser = action.payload
            const exists = state.users.some(user => user.id === newUser.id)
            if (!exists) {
                state.push(newUser)
            } else {
                console.error(`User with ID ${newUser.id} already exists.`);
            } */

            const id = crypto.randomUUID()
            state.push({ id, ...action.payload })
        },
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload
            return state.filter((user) => user.id !== id)
        },
        editUserFound: (state, action: PayloadAction<UserWithId>) => {
            console.log(action.payload)
            const { id, name, email, github } = action.payload
            const foundUser = state.find((user) => user.id === id)
            if (foundUser) {
                foundUser.name = name
                foundUser.email = email
                foundUser.github = github
            }
        }
    }
})


export default userSlice.reducer
export const { addNewUser, deleteUserById, editUserFound } = userSlice.actions