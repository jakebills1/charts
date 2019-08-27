import styled from "styled-components";
export const Header = styled.h1`
  font-weight: bold;
`;
export const WhiteHeader = styled(Header)`
  color: white;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
`;
export const Splash = styled.div`
  position: relative;
`;
export const TextBox = styled.div`
  color: white;
  position: absolute;
  top: 33%;
  left: 0;
  width: 100%;
  background: rgba(100, 10, 10, 0.7);
  padding: 0.8% 0 0.8% 5%;
`;
export const MobileHeader = styled.h1`
  font-size: 3.5em;
`;
export const MobileImage = styled.img`
  width: 100%;
`;
export const Box = styled.div`
  background-color: #bd9476;
  padding: 1.7% 0.5% 0 0.5%;
  height: 100vh;
`;
export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MySegment = styled.div`
  width: 100%;
  padding: 1.5%;
  background-color: #fff;
  border-radius: 0.2em;
`;
export const FlashBox = styled.div`
  background-color: ${props => (props.success ? "#cfffd1" : "#FF9994")};
  text-align: center;
  border: solid ${props => (props.success ? "green" : "red")} thin;
  border-radius: 0.2em;
  padding: 1% 0;
`;
export const DropZoneDiv = styled.div`
  width: 100%;
  height: 33%;
  border: thin black dashed;
  background-color: #948e8e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1%;
  margin-top: 5%;
`;
