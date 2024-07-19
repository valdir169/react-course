export type UserId = string;

export interface User {
    name: string,
    email: string,
    github: string
}

export interface UserWithId extends User {
    id: UserId
}

export interface UserState {
    users: UserWithId[],
    loading: boolean,
    error: string | null
}