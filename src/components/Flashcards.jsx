import { useState } from "react"
import styled from "styled-components"
import seta from "../assets/seta_play.png"
import setaVirada from "../assets/seta_virar.png"

export default function Flashcards({ index, card }) {
    const [inicio, setInicio] = useState(false)
    const [virada, setVirada] = useState(false)
    const [perguntaFinalizada, setPerguntaFinalizada] = useState(false)

    
function mostrarPergunta() {
    if (!perguntaFinalizada) {
        setInicio(true)}
    
}

function mostrarResposta() {
    setVirada(true)
}

function perguntaRespondida() {
setInicio(false)
setPerguntaFinalizada(true)
}


           switch (true) {
  case !inicio:
    return (
      <Cards>
        <p>Pergunta {index + 1}</p>
        <img src={seta} onClick={mostrarPergunta} />
      </Cards>
    );
  case !virada:
    return (
      <CardAberto>
        {card.question}
        <img src={setaVirada} onClick={mostrarResposta} />
      </CardAberto>
    );
  default:
    return (
      <CardAberto>
        {card.answer}
        <Botoes>
          <button onClick={perguntaRespondida}>Não Lembrei</button>
          <button onClick={perguntaRespondida}>Quase não lembrei</button>
          <button onClick={perguntaRespondida}>Zap!</button>
        </Botoes>
      </CardAberto>
    );
}

}

const Cards = styled.div`
  width: 300px;
  height: 65px;
  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding-left: 15px;
  justify-content: space-between;
  padding-right: 15px;
  
  p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px; 
    color: #333333;
   }
  `

const CardAberto = styled.div`
width: 300px;
height: 131px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-bottom: 25px;
display: flex;
justify-content: space-between;
flex-direction: column;

img {
    width: 30px;
    height: 20px;
    margin-left: 260px;
    margin-bottom: 10px;
 
}
`
const Botoes = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 10px;

button {
width: 85px;
height: 37px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
border-radius: 5px;
border: none;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;

 }
`