import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? "#fff" : "#fff")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const InfoContainer2 = styled.div`
  color: #000;
  background: ${({lightBg}) => (lightBg ? "#000" : "#000")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
`
export const InfoWrapper = styled.div`
  margin-top: 70px;
  display: block;
  z-index: 1;
  height: 572px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`
export const Form = styled.form`
  width: 100%;
  z-index: 1;
  display: block;
  margin: 0 auto;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`

export const FormInput = styled.input`
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 80%;
    background: #f1f1f1;
`

export const TopLine = styled.p`
  color: #1db954;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`
