import styled from "styled-components"
import {green} from "./colors"
import {red} from "./colors"
import {orange} from "./colors" 
import {grey} from "./colors"

export const Cards = styled.div`
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
        if (props.status === 'unanswered') {
          return 'none';
        } else {
          return 'line-through';
        }
      }};
  
      color: ${props => {
        return props.status === 'correct'
          ? green
          : props.status === 'wrong'
            ? red
            : props.status === 'nearly'
              ? orange
              : grey;
      }}
    }
  `;
  
  export const OpenCard = styled.div`
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
  `;
  
  export const Buttons = styled.div`
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
  
    .wrong {
      background-color: red;
    }
  
    .nearly {
      background-color: #FF922E;
    }
  
    .correct {
      background-color: #2FBE34;
    }
  `;