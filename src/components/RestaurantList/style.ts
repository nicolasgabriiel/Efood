import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerList = styled.section`
  background-color: ${cores.begeClaro};
  padding: 80px 0 120px 0;
`

export const List = styled.ul`
  display: grid;
  column-gap: 80px;
  grid-row-gap: 48px;
  grid-template-columns: 1fr 1fr;
`