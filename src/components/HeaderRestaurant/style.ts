import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { darken } from 'polished'

export const Text = styled.h2`
  font-weight: 900;
  color: ${colors.pink};
  font-size: 18px;
  cursor: pointer;
`
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
  button {
    background: none;
    border: none;
  }
  ${Text} {
    transition: 0.3s;
    border: 2px solid transparent;
    padding: 5px 10px;
    border-radius: 5px;
    &:hover {
      color: ${darken(0.05, colors.pink)};
      border-color: ${darken(0.05, colors.pink)};
    }
  }
`
