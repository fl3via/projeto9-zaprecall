import styled from "styled-components"
import card from "../assets/seta_play.png"

export default function Flashcards() {

    return (

        <Cards>
         <p> Pergunta</p>
            <img src={card} />
        </Cards>

    )
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