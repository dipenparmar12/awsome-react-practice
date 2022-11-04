import React from 'react'
import styled from 'styled-components'
import { Spacer } from '../../styled-components/index'

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  button {
    flex: 0 0 auto;
  }
`

const Content = styled.div`
  display: ${({ collapsed }) => (collapsed ? 'none' : '')};
  transition: all 0.2s ease;
`

export default function Collapse({ children }) {
  const [isCollapsed, setIsCollapsed] = React.useState(true)
  return (
    <Center>
      <Spacer top={'30px'} />
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? 'Exapnd' : ' Collapse'}{' '}
      </button>
      <Content collapsed={isCollapsed}>{children}</Content>
    </Center>
  )
}

/* 
  Src:https://codepen.io/diabloo/pen/bGdVgbP?editors=0010
 */
