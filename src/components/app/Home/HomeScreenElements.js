import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? "#fff" : "#fff")};
  justify-content: space-between;
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
export const InfoContainer3 = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? "#fff" : "#fff")};
  justify-content: space-between;

`
export const InfoWrapper = styled.div`
  margin-top: 70px;
  display: block;
  z-index: 1;
  height: 571px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const ComponentsWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  z-index: 1;
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
    width: 72.5%;
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

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

export const StyledSelect = styled.select`


  background: ${({primary}) => (primary ? "#1db954" : "#010606")};
  padding: ${({big}) => (big ? "14px 48px" : "12px 30px")};
  color: ${({dark}) => (dark ? "#010606" : "#fff")};
  font-size: ${({fontbig}) => (fontbig ? "20px" : "16px")};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  height:42px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? "#fff" : "#1db954")};
  }
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`;
