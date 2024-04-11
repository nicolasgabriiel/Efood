import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

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
    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
    @media (max-width: ${breakpoints.tablet}) {
      max-width: 80%;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
`
export const Text = styled.h2`
  font-weight: 900;
  color: ${cores.rosa};
  font-size: 18px;
  cursor: pointer;
`
