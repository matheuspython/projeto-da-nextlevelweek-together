import {useHistory} from 'react-router-dom'

import {firebase, auth} from '../services/firebase'

import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from "../assets/images/logo.svg"
import googleiconconfig from "../assets/images/google-icon.svg"

import {Button} from '../components/Button'


import '../styles/auth.scss'

export function Home() {
  const history = useHistory()

  function handleCreateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider).then(result => {
 
      history.push('/rooms/new')
    })

   
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilustração simboliazndo perguntasa e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas de sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleiconconfig} alt="Logo do google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
             type="text"
             placeholder="digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}