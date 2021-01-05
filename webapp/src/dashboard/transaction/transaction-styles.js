import styled from '@emotion/styled'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 21px;
`

const SlideInContainer = styled.div`
  height: 100%;
  width: ${props => (props.open ? '380px' : '0')};
  position: fixed;
  z-index: 5;
  overflow-x: hidden;
  top: 0;
  left: 0;
  background-color: #f6f4e9;
  border-right: 1px solid lightgray;
  transition: 0.55s;
`

const XButton = styled.button`
  position: absolute;
  top: 0;
  right: 7px;
  font-size: 36px;
  border: none;
  background-color: inherit;

  &:hover {
    cursor: pointer;
    color: red;
  }
`

export const TransactionStyles = {
  FormContainer,
  SlideInContainer,
  XButton
}
