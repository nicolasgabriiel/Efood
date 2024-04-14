import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { darken } from 'polished'

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 180px;
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.beige};
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
  color: ${colors.pink};
  background-color: ${colors.beige};
  cursor: pointer;
`
export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  cursor: pointer;
  background-color: ${colors.pink};
  transition: 0.5s;
  &:hover {
    background-color: ${darken(0.08, colors.pink)};
    ${Title} {
      color: ${darken(0.08, colors.beige)};
    }
    p {
      color: ${darken(0.08, colors.beige)};
    }
    ${ButtonCard} {
      color: ${darken(0.08, colors.pink)};
      background-color: ${darken(0.08, colors.beige)};
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 340px;
  }
`
