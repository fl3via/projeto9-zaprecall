import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
min-height: 100vh;
background-color: #FB6B6B;
display: flex;
align-items: center;
flex-direction: column;
margin-bottom: 70px;
`;

export const Logo = styled.div`
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
`;