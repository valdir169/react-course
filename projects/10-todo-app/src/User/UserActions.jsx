import axios from 'axios'
import { useState } from 'react'

export const useUserActions = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (error) {
            console.error("Error fetching Users", error)
        }
    }

    const addUsers = async (user) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', user)
            setUsers([...users, response.data])
            console.log(users)
        } catch (error) {
            console.error("Error to add User", error)
        }
    }

    const updateUser = async (id, updatedUser) => {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser)
            setUsers(users.map(user => (user.id === id ? response.data : user)))
        } catch (error) {
            console.error("Error updating User", error)
        }
    }

    const deleteUser = async (id) => {
        try {
            axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUsers(users.filter(user => user.id !== id))
        } catch (error) {
            console.error("Error deleting User", error)
        }
    }

    return { users, getUsers, addUsers, updateUser, deleteUser }
}