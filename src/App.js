import { useState } from 'react';
import logo from './assets/images/logo-senai.png'
import UserInput from './conponents/UserInput'
import UserList from './conponents/UserList'
import './App.css';


function App() {
  const [usuarios, setUsuarios] = useState(['Marta', 'Maria', 'Jose' ])

const adicionarUsuarios = (novoUsuario) => {
  if (usuarios.includes(novoUsuario)) {
    alert('Usuario ja existe na lista!')
    return;
  }
  setUsuarios([ ... usuarios, novoUsuario])
}


return(
  <div className='App'>
      <img src={logo} alt='Logo da empresa'/>
      <h1>Meu App</h1>
      <hr/>
      <UserInput onAddUser={adicionarUsuarios}/>
      <hr/>
      <UserInput usuarios={usuarios}/>
    </div>
  );
}

export default App;
