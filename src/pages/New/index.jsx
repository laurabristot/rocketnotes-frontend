import { useState } from "react"

import { Container, Form} from "./styles"
import { Link } from 'react-router-dom'

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"

export function New(){
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  function handleAddLinks(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleDeleteLink(deleted){
    setLinks(prevState => prevState.filter(link =>  link !== deleted))
  }
  
  
  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input
            placeholder="Título"
          />

          <TextArea
            placeholder="Observações"
          />

          <Section 
            title="Links úteis"
          >

            {
              links.map((link, index)=>(
                <NoteItem
                key={String(index)}                
                value={link}
                onClick={()=>handleDeleteLink(link)}
                />
              ))
            }

            <NoteItem
            isNew
            placeholder="Novo Link"
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onClick={handleAddLinks}
            />

          </Section>

          <Section
            title="Marcadores"
          >
            <div className="tags">
            <NoteItem value="React" />
            <NoteItem placeholder="Nova Tag" isNew/>
            </div>
          </Section>

          <Button
            title="Salvar"
          />

        </Form>

      </main>
    </Container>
  )
}