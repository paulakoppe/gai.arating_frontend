import { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { api } from '../../services/api';

import { Container, Form } from "./styles";


export function New() {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");


  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink]);
    setNewLink(""); 
   }

   function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
   }

   function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag(""); 
   }

   function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
   }

   async function handleNewNote() {
    if(!title) {
      return alert ("Por favor, digite o título do livro :)")
    }
    
    if(newLink) {
      return alert("Ei! Você deixou um link no campo e não adicionou, por favor clique para adicionar ou deixe o campo vazio.")
      
    }
    if(newTag) {
      return alert("Ei! Você deixou uma tag no campo e não adicionou, por favor clique para adicionar ou deixe o campo vazio.")

    }

    await api.post("/books", {
      title,
      rate,
      tags,
      links
    });

    alert("Nota criada com sucesso!");
    navigate("/");
   }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input 
          placeholder="Título"
          onChange = {e => setTitle(e.target.value)}
          />


          <Textarea 
          placeholder="Avaliação"
          onChange = {e => setRate(e.target.value)}
          />

          
          <Section title="Onde encontrar">
            {
              links.map((link, index) => (
                <NoteItem 
                key = {String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
                />

              ))
            }
            <NoteItem 
            isNew 
            placeholder="Novo link" 
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onClick={handleAddLink}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddLink();
              }
            }}
            />

          </Section>

          <Section title="Gêneros">
            <div className="tags">
              {
                tags.map((tag, index) => (     
                <NoteItem 
                key = {String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
                 />
                ))
              }

            <NoteItem
             isNew 
             placeholder="novo gênero" 
             value={newTag}
             onChange={e => setNewTag(e.target.value)}
             onClick={handleAddTag}
             onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddTag();
              }
            }}
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
  );
}
