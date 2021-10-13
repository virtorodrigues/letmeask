
import illustration from '../assets/illustration.svg';
import logo from '../assets/logo.svg';

import { Button } from '../components/Button';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/userAuth';

import '../styles/auth.scss';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleNewRoom(event: FormEvent) {
    event.preventDefault();

    console.log(newRoom);

    if (newRoom.trim() === "") return;

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

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
          <form onSubmit={handleNewRoom}>
            <input
              type="text"
              value={newRoom}
              onChange={(e) => setNewRoom(e.target.value)}
              placeholder="Nome da sala"
            />
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