import { useState } from "react";
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = () => {
    if (email === "eduardo.lino@pucpr.br" && password === "123456")
      setMensagem("Acessado com sucesso!");
    else
      setMensagem("Usuário ou senha incorretos!");
  }

  return (
    <div className='Container'>
      <p className="Title">
        Login
      </p>
      <div>
        <input className="Input" type="email" size={20} value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input className="Input" type="password" size={20} value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="Button" onClick={handleSubmit}>Acessar</button>
      <p className="Message">{mensagem}</p>
    </div>
  );
}

export default App;
