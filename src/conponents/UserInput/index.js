//src\conponents\Userinput\index.js
import { useState } from "react";
import './styles.css'

const UserInput = ({ onAddUser }) => {
    const [usuario, setUsuario] = useState('')

    const handlechange = (event) => {
        setUsuario(event.target.value)
    }

    const handleSubmit = () => {
        if (usuario.trim()) {
            onAddUser(usuario)
            setUsuario('')
        } else {
            alert('Digite um nome de usuário')
        }
    }

    return (
        <div className="user-input">
            <h2>Adicionar usuário</h2>
            <input>
                type="texte"
                placeholder="Digite o nome do usuário"
                value={usuario}
                onChange={handlechange}
            </input>
        </div>
    )
}

export default UserInput