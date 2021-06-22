import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from "../assets/images/logo.svg"
import googleiconconfig from "../assets/images/google-icon.svg"

export function Home() {
  return (
    <div>
      <aside>
        <img src={ilustrationImg} alt="Ilustração simboliazndo perguntasa e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas de sua audiência em tempo-real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <button>
            <img src={googleiconconfig} alt="Logo do google" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input
             type="text"
             placeholder="digite o código da sala"
            />
          </form>
        </div>
      </main>
    </div>
  )
}