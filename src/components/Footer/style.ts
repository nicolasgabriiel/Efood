import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ContainerFooter = styled.footer`
  padding: 40px 0;
  background: ${cores.bege};
  * {
    margin: 0 auto;
  }
`

export const ContainerSocial = styled.div`
  display: flex;
  justify-content: space-between;
  width: 88px;
  margin: 32px auto 80px auto;
`

export const Social = styled.img`
  margin: 0 auto;
  display: block;
  height: 24px;
  cursor: pointer;
`

export const Copywrite = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${cores.rosa};
  max-width: 480px;
  text-align: center;
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
`
