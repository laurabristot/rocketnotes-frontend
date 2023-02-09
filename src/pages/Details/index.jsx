import {Container, Links, Content} from './styles'
import { useParams, useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tags } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'

import { useEffect, useState } from 'react'
import { api } from '../../services/api'


export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack(){
    navigate("/")
  }
  
  useEffect(()=>{
    async function fetchNote(){
      const res = await api.get(`/notes/${params.id}`)
      setData(res.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header/>
      {
        data &&
      <main>
        <Content>
        <ButtonText
        title="Excluir nota"/>

        <h1>{data.title}</h1>
        <p>{data.description}</p>

      { data.links &&
        <Section
        title="Links úteis">
          <Links>
            {
              data.links.map(link => (
                <li
                  key={String(link.id)}
                ><a 
                  href={link.url}
                  target="_blank"  
                >
                  {link.url}
                </a></li>
              ))
            }
          </Links>
      </Section>}

      {
        data.tags &&
      <Section
        title="Marcadores">
          {
            data.tags.map(tag => (
              <Tags 
              key={String(tag.id)}
              title={tag.name}
              />
            ))
          }
      </Section>
        }
      
      <Button 
        title='voltar'
        onClick={handleBack}
      />



        </Content>
      </main>
      }
     
    </Container>
  )
}


