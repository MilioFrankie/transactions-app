import React from 'react'
import styled from '@emotion/styled'

export function NoMatch () {
  return (
    <NoMatchContainer>
      <h1>404 Page Not Found</h1>
    </NoMatchContainer>
  )
}

const NoMatchContainer = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
