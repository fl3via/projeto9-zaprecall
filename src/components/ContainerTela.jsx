import { useState } from "react";
import { Container, Logo } from "../Styled/ContainerScreen.styled";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
import logo from "../assets/logo.png";
import cards from "/cards";

export default function ScreenContainer() {
  const [counter, setCounter] = useState(0);

  function taskCounter() {
    setCounter(counter + 1);
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo" />
        <h1>ZapRecall</h1>
      </Logo>

      {cards.map((card, index) => (
        <Flashcards key={card} index={index} card={card} taskCounter={taskCounter} />
      ))}

      <Footer questions={cards.length} completed={counter} />
    </Container>
  );
}

