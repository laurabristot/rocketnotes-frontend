import { useState } from "react"

import { Container, Form} from "./styles"
import { useNavigate } from 'react-router-dom'

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function New(){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [ tags, setTags] = useState([])
  const [ newTag, setNewTag ] = useState("")

  const navigate = useNavigate()

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
  
  async function handleNewNote(){
   if(!title){
    alert('Digite o Título da nota.')
   }
    
   if (newLink){
     alert('Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique em adicionar, ou deixe o campo vazio')
   }
    
   if (newTag){
      alert('Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique em adicionar, ou deixe o campo vazio')
    }


    await api.post('/notes', {
      title,
      description,
      tags,
      links
    })

    alert("Nota criada com sucesso!")
    navigate(-1)
  }
    
    function handleBack(){
      navigate(-1)
    }
  
  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText
              title="Voltar"
              onClick={handleBack}
            />
          </header>

          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />

          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
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
            onClick={handleNewNote}
          />

        </Form>

      </main>
    </Container>
  )
}