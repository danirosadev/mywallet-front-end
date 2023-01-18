import styled from "styled-components"

const Title = styled.p`
    font-family: 'Saira Stencil One', cursive;
    font-size: 30px;
    color: white;
`

const Container = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const FormContainer = styled.div`
    width: 85%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    p{
        text-align: center;
        color: white;
        margin-top: 10px;
    }
`
const Input = styled.input`
    width: 100%;
    height: 45px;
    margin-top: 10px;
    padding-left: 15px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-size: 20px;
    ::placeholder{
        color: black;
        font-size: 20px;
    }
`
const Button = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    background-color: #A328D6;
    margin-top: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color: white;
        font-size: 22px;
        margin-bottom: 8px;
    }
`

export {Title, Container, FormContainer, Input, Button}