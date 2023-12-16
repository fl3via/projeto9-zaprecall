import { useState } from "react"
import styled from "styled-components"
import seta from "../assets/seta_play.png"
import setaVirada from "../assets/seta_virar.png"
import certo from "../assets/icone_certo.png"
import quase from "../assets/icone_quase.png"
import errado from "../assets/icone_erro.png"
import {verde} from "../css/colors"
import {vermelho} from "../css/colors"
import {laranja} from "../css/colors" 
import {cinza} from "../css/colors"
import {rosa} from "../css/colors"


export default function Flashcards({ index, card, contadorDeTarefas}) {
    const [inicio, setInicio] = useState(false)
    const [virada, setVirada] = useState(false)
    const [perguntaFinalizada, setPerguntaFinalizada] = useState(false)
    const [statusDaPergunta, setStatusDaPergunta] = useState('nao respondido')


    function mostrarPergunta() {
        {!perguntaFinalizada ? setInicio(true) : null}

    }

    function mostrarResposta() {
        setVirada(true)
    }

    function perguntaRespondida(status) {
        setInicio(false)
        setPerguntaFinalizada(true)
        setStatusDaPergunta(status)
        contadorDeTarefas();
    }

    function seletor() {
        switch (statusDaPergunta) {
            case 'errado':
                return errado
            case 'quase':
                return quase
            case 'certo':
                return certo
            default:
                return seta

        }
    }

    
 switch (true) {
        case !inicio:
            return (
                <Cards status={statusDaPergunta} data-test="flashcard">
                    <p data-test="flashcard-text">Pergunta {index + 1}</p>
                    <img src={seletor()} onClick={mostrarPergunta} data-test="play-btn" />
                </Cards>
            );
        case !virada:
            return (
                <CardAberto data-test="flashcard">
                    <p data-test="flashcard-text">{card.question}</p>
                    <img data-test="turn-btn" src={setaVirada} onClick={mostrarResposta} />
                </CardAberto>
            );
        default:
            return (
                <CardAberto data-test="flashcard" >
                 <p data-test="flashcard-text">{card.answer}</p>   
                    <Botoes>
                        <button className="errado" onClick={() => perguntaRespondida('errado')} data-test="no-btn">Não Lembrei</button>
                        <button className="quase" onClick={() => perguntaRespondida('quase')} data-test="partial-btn" >Quase não lembrei</button>
                        <button  className="certo" onClick={() => perguntaRespondida('certo')} data-test="zap-btn">Zap!</button>
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
    text-decoration: ${props => {
        if (props.status === 'nao respondido') {
          return 'none';
        } else {
          return 'line-through';
        }
      }};
      
    color: ${props => {
        return props.status === 'certo'
          ? verde
          : props.status === 'errado'
          ? vermelho
          : props.status === 'quase'
          ? laranja
          : cinza;
      }}
      
  `

const CardAberto = styled.div`
width: 300px;
height: 131px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
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
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
}

 .errado {
    background-color: red;
 }

.quase {
    background-color: #FF922E;
}

.certo {
    background-color: #2FBE34;
}

`

