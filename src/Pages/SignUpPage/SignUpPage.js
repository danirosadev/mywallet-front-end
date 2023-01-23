import {Container, FormContainer, Input, Button, Title} from "./style"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function SignUpPage(){
    const [form, setForm] = useState({
        email:"",
        name: "",
        confirmPassword:"",
        password:""
    })
    const navigate = useNavigate()

    function handleForm(e){
        e.preventDefault()

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function userRegister(e){
        e.preventDefault()

        const promise = axios.post("http://localhost:5000/sign-up", form)
        promise.then(() => {
            navigate("/")
        })

        promise.catch((err) => {
            alert(err.response.data.message)
        })
    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <FormContainer>
                <form onSubmit={userRegister}>
                    <Input data-test="name" name="name" onChange={handleForm} value={form.name} type="text" placeholder="Nome" required/>
                    <Input data-test="email" name="email" onChange={handleForm} value={form.email} type="email" placeholder="Email" required/>
                    <Input data-test="password" name="password" onChange={handleForm} value={form.password} type="password" placeholder="Senha" required/>
                    <Input data-test="conf-password" name="confirm-password" onChange={handleForm} value={form.confirmPassword} type="password" placeholder="Confirme a senha" required/>
                    <Button data-test="signup-btn" type="submit">
                        <p>Cadastrar</p>
                    </Button>
                </form>
                <Link data-test="login-link" to="/">
                    <p>Já tem uma conta? Entre agora!</p>
                </Link>
            </FormContainer>
        </Container>
    )
}