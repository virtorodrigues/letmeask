
import illustration from '../assets/illustration.svg';
import logo from '../assets/logo.svg';

import { Button } from '../components/Button';

import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/userAuth';

import '../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth();

  return (
    <div id="user-auth">
      <aside>
        <img src={illustration} alt="" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="logo letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}