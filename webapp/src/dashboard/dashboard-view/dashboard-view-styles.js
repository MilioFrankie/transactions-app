import styled from '@emotion/styled'

const Container = styled.div`
  min-height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.55s;
  ${props => props.formOpen && `margin-left: 380px`}
`
const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 1250px) {
    flex-direction: column;
  }
`
export const DashboardViewStyles = {
  Container,
  ContentContainer
}
