import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import { useUserActions } from './UserActions'

const ListOfUsers = () => {
    const { users, getUsers, addUsers, updateUser, deleteUser } = useUserActions()
    const [formData, setFormData] = useState({ name: '', username: '', email: '' })
    const [editingUser, setEditingUser] = useState(null)

    useEffect(() => {
        getUsers()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editingUser) {
            updateUser(editingUser.id, formData)
        } else {
            addUsers(formData)
        }
        setFormData({ name: '', username: '', email: '' })
        setEditingUser(null)
    }

    const handleEdit = (user) => {
        setFormData({ name: user.name, username: user.username, email: user.email })
        setEditingUser(user)
    }

    const handleDelete = (id) => {
        deleteUser(id)
    }

    return (
        <>
            <div>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label
                            for="exampleName"
                            hidden
                        >
                        </Label>
                        <Input
                            id='exampleName'
                            name="name"
                            placeholder="Name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {''}
                    <FormGroup>
                        <Label
                            for="exampleUserName"
                            hidden
                        >
                        </Label>
                        <Input
                            id='exampleUserName'
                            name="username"
                            placeholder="User name"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {''}
                    <FormGroup>
                        <Label
                            for="exampleEmail"
                            hidden
                        >
                        </Label>
                        <Input
                            id='exampleEmail'
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {''}
                    <Button>
                        {editingUser ? 'Update' : 'Add'}
                    </Button>
                </Form>
            </div>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                <Button onClick={() => handleEdit(item)}>Edit</Button>
                                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default ListOfUsers