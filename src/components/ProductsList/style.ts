import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerList = styled.section`
  background-color: ${cores.begeClaro};
  padding: 56px 0 120px 0;
`

export const List = styled.ul`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
`
