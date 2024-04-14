import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { darken } from 'polished'

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 180px;
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${cores.bege};
  margin: 8px 0;
`
export const ButtonCard = styled.button`
  margin-top: 8px;
  border: none;
  box-shadow: none;
  padding: 4px 0;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.rosa};
  background-color: ${cores.bege};
  cursor: pointer;
`
export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  cursor: pointer;
  background-color: ${cores.rosa};
  transition: 0.5s;
  &:hover {
    background-color: ${darken(0.08, cores.rosa)};
    ${Title} {
      color: ${darken(0.08, cores.bege)};
    }
    p {
      color: ${darken(0.08, cores.bege)};
    }
    ${ButtonCard} {
      color: ${darken(0.08, cores.rosa)};
      background-color: ${darken(0.08, cores.bege)};
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 340px;
  }
`
