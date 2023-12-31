import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiSearch } from 'react-icons/fi'

import { api } from '../../services/api';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText'


export function Home() {
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [search, setSearch] = useState([]);
    const [books, setBooks] = useState([]);

    const navigate = useNavigate();

    function handleTagSelected(tagName) {
        if(tagName === 'all') {
            return setTagsSelected([])
        }
        const alreadySelected = tagsSelected.includes(tagName);
        
        if(alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        }else{ 
        setTagsSelected(prevState => [...prevState, tagName])
    }
      }  

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags");
            setTags(response.data)
        }

        
        fetchTags()
    }, [])

    useEffect(() => {
        async function fetchBooks() {
            const response = await api.get(`/books?title=${search}&tags=${tagsSelected}`)
            setBooks(response.data)
        }

        fetchBooks();

    }, [tagsSelected, search])

    return (
        <Container>
            <Brand>
                <h1>gai.a rating</h1>
            </Brand>
            <Header />
            <Menu>
            <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            $isactive={tagsSelected.length === 0}
          />
        </li>
        {tags && tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                $isactive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
            

            </Menu>

            <Search>
                <Input 
                placeholder="Pesquisar pelo título" 
                icon={FiSearch}
                onChange = {(e) => setSearch(e.target.value)}
                />
            </Search>

            <Content>

                <Section title="Meus livros">
                   {
                    books.map(book => (
                   <Note 
                   key = {String(book.id)}
                   data={book}
                   onClick={() => handleDetails(book.id)}
                        />
                        ))
                    }

                </Section>

            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>

    )


}