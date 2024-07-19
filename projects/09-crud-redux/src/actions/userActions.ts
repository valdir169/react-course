import { UserId, UserWithId } from "../types"
import { useAppDispacth, useAppSelector } from "../hooks/hooks"
import { addNewUser, deleteUserById, editUserFound } from "../features/users/userSlice"

export const useUserActions = () => {
    const dispatch = useAppDispacth()
    const users = useAppSelector((state) => state.users);


    const addUser = (user: UserWithId) => {
        const exists = users.some(existingUser => existingUser.id === user.id);
        if (!exists) {
            dispatch(addNewUser(user));
        } else {
            console.error(`User with ID ${user.id} already exists.`);
        }
    }

    const removeUser = (id: UserId) => {
        dispatch(deleteUserById(id))
    }

    const updateUser = (user: UserWithId) => {
        dispatch(editUserFound(user))
    }

    return { addUser, removeUser, updateUser }
}
