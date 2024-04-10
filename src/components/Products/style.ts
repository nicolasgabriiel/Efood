import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  background-color: ${cores.rosa};
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 168px;
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
