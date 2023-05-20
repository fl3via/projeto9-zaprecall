import { useState } from "react";
import styled from "styled-components"
import Flashcards from "./Flashcards";
import Footer from "./Footer";
import logo from "../assets/logo.png"
import cards from "/cards"

export default function ContainerTela() {
  const [contador, setContador] = useState(0)

  return (

    <Container>
      <Logo>
        <img src={logo} />
        <h1>ZapRecall</h1>
      </Logo>

      {cards.map((card, index) => (
        <Flashcards key={card} index={index} card={card} />))}


      < Footer perguntas={cards.length} concluidos={contador} />
    </Container>

  )
}

const Container = styled.div`
width: 100vw;
min-height: 100vh;
background-color: #FB6B6B;
display: flex;
align-items: center;
flex-direction: column;
`

const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 40px 0 20px 0;
img {
width: 52px;
height: 60px;
}
h1 {
  color: #FFFFFF;
  font-weight: 400;
  font-family: 'Righteous';
  font-size: 36px;
  margin-left: 20px;
}
`
