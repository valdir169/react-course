import { AppDispatch, RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const getUserById = (state: RootState, id: string) => {
    return state.users.find(user => user.id === id) || null
}


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispacth: () => AppDispatch = useDispatch