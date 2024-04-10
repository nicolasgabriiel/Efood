import { styled } from 'styled-components'
import Props from './index'

export interface Props {
  color: string
  children: string
}

export const ContainerDescription = styled.p<Props>`
  font-size: 14px;
  line-height: 22px;
  color: ${(Props) => Props.color};
`
