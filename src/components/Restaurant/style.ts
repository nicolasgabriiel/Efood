import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/style'

export const Card = styled.li`
  display: block;
  position: relative;
  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 218px;
  object-fit: cover;
`
export const ContainerText = styled.div`
  padding: 8px;
  background: ${cores.branca};
  border-bottom: 1px solid ${cores.rosa};
  border-right: 1px solid ${cores.rosa};
  border-left: 1px solid ${cores.rosa};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 218px);
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-itens: center;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
`

export const Star = styled.img`
  display: block;
  height: 20px;
  margin-left: 8px;
`

export const ContainerDescription = styled.div`
  padding: 16px 0;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
`
