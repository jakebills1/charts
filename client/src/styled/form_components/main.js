import styled from "styled-components";
export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: block;
  border: none;
  border-radius: 0.2em;
  line-height: 200%;
  margin-bottom: 1.6%;
  padding-left: 0.5%;
`;
export const LeftInput = styled(Input)`
  margin-right: 0.5%;
`;
export const RightInput = styled(Input)`
  margin-left: 0.5%;
`;
export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const Textarea = styled.textarea`
  width: 100%;
  display: block;
  border: none;
  resize: none;
  border-radius: 0.2em;
  line-height: 200%;
  margin-bottom: 1.6%;
  padding-left: 0.5%;
`;
export const Button = styled.button`
  width: 7%;
  height: 3em;
  font-family: inherit;
  background-color: #c76c3f;
  border-radius: 0.2em;
  border: transparent;
`;
export const FullWidthInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
`;
