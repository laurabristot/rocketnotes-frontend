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

  const [ tags, setTags] = useState([])
  const [ newTag, setNewTag ] = useState("")

  function handleAddLinks(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleDeleteLink(deleted){
    setLinks(prevState => prevState.filter(link =>  link !== deleted))
  }

  function handleAddTags(tags){
    setTags(prevState => [ ...prevState, newTag])
    setNewTag("")
  }

  function handleDeleteTags(deleted){
    setTags(prevState => prevState.filter(tag => tag!== deleted))
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
            {
              tags.map((tag, index)=>(
                <NoteItem 
                  key={index}
                  value={tag}
                  onClick={()=>handleDeleteTags(tag)}
              />
              ))
            }


            <NoteItem 
              placeholder="Nova Tag" 
              isNew
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTags}
              />
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