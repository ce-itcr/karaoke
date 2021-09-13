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
  margin-top: 120px;
  display: block;
  z-index: 1;
  height: 521px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmas(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `"col2 col1"` : `"col1 col2"`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`)};
  }
`

export const Column1 = styled.div`
  margin-bottom: 0;
  padding: 0 15px;
  grid-area: col1;
`
export const Columnb = styled.div`
  margin-bottom: 125px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 45px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #1db954;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? "#010606" : "#fff")};
`

export const BtnWrap =styled.div`
  display: flex;
  justify-content:center;
`

export const ImgWrap = styled.div`
  max-width: 280px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  padding-left: 0; 
`

export const ImgWrap2 = styled.div`
  max-width: 150px;
`

export const Img2 = styled.img`
  width: 80%;
  padding-left: 0; 
  padding-top: 0;
`