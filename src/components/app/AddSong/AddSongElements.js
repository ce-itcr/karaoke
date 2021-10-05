import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? "#fff" : "#fff")};

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`
export const InfoContainer2 = styled.div`
  color: #000;
  background: ${({lightBg}) => (lightBg ? "#000" : "#000")};
  display: flex;
  height: 80px;
`

export const InfoWrapper = styled.div`
  margin-top: 50px;
  display: block;
  z-index: 1;
  height: 591px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const Form = styled.form`
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
  display: grid;
  margin: 0 auto;
  padding: 45px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`