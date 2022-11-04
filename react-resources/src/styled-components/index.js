import styled from 'styled-components'

export const Spacer = styled.div`
  margin-top: ${({ top }) => (top ? top : '10px')};
`
