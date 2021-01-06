import React from 'react'
import BarLoader from 'react-spinners/BarLoader'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

export function LargeLoader ({ loading }) {
  return (
    <LargeLoaderContainer>
      <BarLoader color={'#007cba'} height={7} loading={loading} width={250} />
    </LargeLoaderContainer>
  )
}

LargeLoader.propTypes = {
  loading: PropTypes.bool.isRequired
}

const LargeLoaderContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
