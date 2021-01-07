import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const lightGrey = '#f1f1f1'
const electricGreen = '#00ff00'
const blue = '#0095ff'
const red = '#ff0033'

const CheckMark = styled.span`
  color: ${electricGreen};
  font-size: 16px;
`
const TD = styled.td`
  border-bottom: 2px solid ${lightGrey};
  padding: 10px;
  text-align: ${props => (props.center ? 'center' : 'left')};
`
const Table = styled.table`
  border-collapse: collapse;
`
const TR = styled.tr`
  transition: ease-in 0.15s;
  &:hover {
    background-color: ${lightGrey};
  }
`
export const PlainButton = styled.div`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${props => props.danger ? red : blue};
  }
`

export const TransactionTableStyles = {
  CheckMark,
  TD,
  Table,
  TR,
  PlainButton
}

TD.propTypes = {
  color: PropTypes.bool
}
