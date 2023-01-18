import { Container, FormContainer, Input, Button, Title } from "./style"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useContext } from "react"
import { UserContext } from "../../context"

export default function SignInPage() {
    const { setUserData } = useContext(UserContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    function handleForm(e) {
        e.preventDefault()

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function login(e) {
        e.preventDefault()

        const promise = axios.post("http://localhost:5000/auth/login", form)
        promise.then((res) => {
            navigate("/hoje")
            setUserData(res.data)
            console.log(res.data)
        })
        promise.catch((err) => {
            alert(err.response.data.message)
        })
    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <FormContainer>
                <form onSubmit={login}>
                    <Input data-test="email" name="email" onChange={handleForm} value={form.email} type="email" placeholder="E-mail" required />
                    <Input data-test="password" name="password" onChange={handleForm} value={form.password} type="password" placeholder="Senha" required />
                    <Button data-test="sign-in-submit" type="submit">
                        <p>Entrar</p>
                    </Button>
                </form>
                <Link to="/cadastro">
                    <p>Primeiro acesso? Cadastre-se!</p>
                </Link>
            </FormContainer>
        </Container>
    )
}