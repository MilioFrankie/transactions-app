import styled from '@emotion/styled'

const lightGrey = '#f1f1f1'
const errorRed = '#ff0033'
const Form = styled.form`
  width: 275px;
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  margin: 7px 0;
  padding: 14px;
  border: 1px solid ${lightGrey};
  border-radius: 4px;
`
const SubmitButton = styled.button`
  width: 120px;
  height: 36px;
  border: none;
  border-radius: 100px;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  background-color: black;
  margin: 21px auto;
  &:hover {
    background-color: rgb(93, 95, 109);
    cursor: pointer;
  }
`
const ErrorText = styled.p`
  margin: 0 0 14px;
  color: ${errorRed};
  font-size: 14px;
`
const FormContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 150px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const FormTitle = styled.h1`
  margin-top: 0
`
export const FormStyles = {
  Form,
  Input,
  SubmitButton,
  ErrorText,
  FormContainer,
  FormTitle
}
