import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  padding: 40px 0 65px 0;
  align-itens: center;
  .container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    max-width: 1024px;
    align-items: center;
    .link {
      border: none;
      text-decoration: none;
    }
  }
`
export const Text = styled.h2`
  font-weight: 900;
  color: ${cores.rosa};
  font-size: 18px;
`
