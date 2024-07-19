import { useNavigate, useParams } from 'react-router-dom'
import { Badge, Card, Button, TextInput, Title } from "@tremor/react"
import { useEffect, useState } from "react"
import { useUserActions } from "../actions/userActions"
import { useAppSelector } from '../hooks/hooks'

const CreateNewUser = () => {
    const users = useAppSelector((state) => state.users)
    const { addUser, updateUser } = useUserActions()
    const navigate = useNavigate()
    const params = useParams()

    const [user, setUser] = useState({
        name: '',
        email: '',
        github: ''
    })


    const [result, setResult] = useState<"ok" | "ko" | null>(null)

    useEffect(() => {
        if (params.UserId) {
            setUser(users.find((user) => user.id === params.UserId));
        }
    }, [params, users]);

    /*  First way to create a user
         const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
         event.preventDefault()
         setResult(null)
     
         const form = event.target as HTMLFormElement
         const formData = new FormData(form)
     
         const name = formData.get('name') as string
         const email = formData.get('email') as string
         const github = formData.get('github') as string
     
         if (!name || !email || !github) {
             return setResult("ko")
         }
     
         addUser(user)
         setResult('ok')
         form.reset()
         navigate('/')
     } */

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (params.UserId) {
            updateUser(user)
        } else {
            addUser(user)
            setResult('ok')
        }

        navigate('/')
    }

    return (
        <Card style={{ marginTop: "16px" }}>
            <Title>Crear usuario</Title>
            <form onSubmit={handleSubmit} >
                <TextInput
                    name="name"
                    placeholder="Aquí el nombre"
                    type='text'
                    onChange={handleChange}
                    value={user.name}
                />
                <TextInput
                    name="email"
                    placeholder="Aquí el email"
                    type='email'
                    onChange={handleChange}
                    value={user.email}
                />
                <TextInput
                    name="github"
                    placeholder="Aquí el github"
                    type='text'
                    onChange={handleChange}
                    value={user.github}
                />

                <div>
                    <Button
                        type="submit"
                        style={{ marginTop: "16px" }}
                    >
                        {params.UserId ? 'Update' : 'Create'}
                    </Button>
                    <span>
                        {result === 'ok' && <Badge style={{ color: "green" }}>Guardado correctamente</Badge>}
                        {result === 'ko' && <Badge style={{ color: "red" }}>Error en los campos</Badge>}
                    </span>
                </div>
            </form>
        </Card>
    )

}

export default CreateNewUser