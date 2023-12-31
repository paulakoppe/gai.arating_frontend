/* eslint-disable react/jsx-no-target-blank */
import {useState, useEffect} from 'react'
import { Container, Links, Content } from "./styles";
import { useParams, useNavigate } from 'react-router-dom';



import{ Tag } from '../../components/Tag';
import{ Header } from '../../components/Header';
import{ Button } from '../../components/Button';
import{ ButtonText } from '../../components/ButtonText';
import{ Section } from '../../components/Section';
import { api } from '../../services/api';


export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate()

  function handleBack() {
    navigate("/")
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm) {
      await api.delete(`/books/${params.id}`);
      navigate("/")
    }
  }

  useEffect(() =>{
    async function fetchNote(){
      const response = await api.get(`/books/${params.id}`)
      setData(response.data)
      console.log(response.data)
    }

    fetchNote()
  },[])

  return (
    <Container>
    <Header />
    { data &&
    <main>
      <Content>

    <ButtonText 
    title="Excluir"
     onClick={handleRemove}
     />

      <h1>{data.title}</h1>

      <p> 
        {data.rate}
      </p>

    {  data.links &&
    <Section title = "Onde encontrar">
      <Links>
       { 
          data.links.map( link => (
            <li
            key={String(link.id)}>
              <a href={link.url} target="_blank"> 
              {link.url}
              </a>
              </li>
          ))
        }
        </Links>
    </Section>
    }

  { 
    data.tags && 
   <Section title = "Gêneros">
        {
          data.tags.map(tag => (
        <Tag 
        key={String(tag.id)}
        title={tag.name} 
        />
        ))
    }
    </Section>
    }

    <Button 
    title="Voltar"
    onClick={handleBack}
    />
          </Content>
    </main>
    }
    </Container>
  )
}