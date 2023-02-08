import { RiShutDownLine } from 'react-icons/ri';


import { Container, Profile, Logout } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile to='/profile'>
        <img src="https://github.com/laurabristot.png" alt="foto de perfil do usuario" />
        
        <div>
          <span>Bem-Vindo</span>
          <strong>Laura Bristot</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}