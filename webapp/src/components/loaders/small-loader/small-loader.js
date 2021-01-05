import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

export function SmallLoader ({ loading }) {
  return (
    <SmallLoaderContainer>
      <ClipLoader color={'#0EB2F1'} loading={loading} size={65} />
    </SmallLoaderContainer>
  )
}

SmallLoader.propTypes = {
  loading: PropTypes.bool.isRequired
}

const SmallLoaderContainer = styled.div`
  width: 380px;
  height: 380px;
  position: fixed;
  z-index: 7;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
