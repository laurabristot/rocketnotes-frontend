import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';


import { Container, Profile, Logout } from "./styles";

export function Header(){
  const { signOut } = useAuth()

  return(
    <Container>
      <Profile to='/profile'>
        <img src="https://github.com/laurabristot.png" alt="foto de perfil do usuario" />
        
        <div>
          <span>Bem-Vindo</span>
          <strong>Laura Bristot</strong>
        </div>
      </Profile>

      <Logout
      onClick={signOut}>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}