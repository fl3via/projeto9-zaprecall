import { useState } from "react"
import { Cards, OpenCard, Buttons } from "../Styled/FlashcardStyled"
import arrow from "../assets/seta_play.png"
import flippedArrow from "../assets/seta_virar.png"
import correctIcon from "../assets/icone_certo.png"
import nearlyIcon from "../assets/icone_quase.png"
import wrongIcon from "../assets/icone_erro.png"

export default function Flashcards({ index, card, taskCounter }) {
    const [start, setStart] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [questionFinished, setQuestionFinished] = useState(false);
    const [questionStatus, setQuestionStatus] = useState('unanswered');
  
    function showQuestion() {
      if (!questionFinished) {
        setStart(true);
      }
    }
  
    function showAnswer() {
      setFlipped(true);
    }
  
    function answeredQuestion(status) {
      setStart(false);
      setQuestionFinished(true);
      setQuestionStatus(status);
      taskCounter();
    }
  
    function iconSelector() {
      switch (questionStatus) {
        case 'wrong':
          return wrongIcon;
        case 'nearly':
          return nearlyIcon;
        case 'correct':
          return correctIcon;
        default:
          return arrow;
      }
    }
  
    switch (true) {
      case !start:
        return (
          <Cards status={questionStatus} data-test="flashcard">
            <p data-test="flashcard-text">Question {index + 1}</p>
            <img src={iconSelector()} onClick={showQuestion} data-test="play-btn" />
          </Cards>
        );
      case !flipped:
        return (
          <OpenCard data-test="flashcard">
            <p data-test="flashcard-text">{card.question}</p>
            <img data-test="turn-btn" src={flippedArrow} onClick={showAnswer} />
          </OpenCard>
        );
      default:
        return (
          <OpenCard data-test="flashcard" >
            <p data-test="flashcard-text">{card.answer}</p>
            <Buttons>
              <button className="wrong" onClick={() => answeredQuestion('wrong')} data-test="no-btn">Didn't Recall</button>
              <button className="nearly" onClick={() => answeredQuestion('nearly')} data-test="partial-btn" >Almost</button>
              <button className="correct" onClick={() => answeredQuestion('correct')} data-test="zap-btn">Zap!</button>
            </Buttons>
          </OpenCard>
        );
    }
  }
  
  