import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ContainerFooter = styled.footer`
  padding: 40px 0;
  background: ${colors.beige};
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
  transition: fill 1s ease;
  &:hover {
    filter: brightness(0.8);
  }
`

export const Copywrite = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${colors.pink};
  max-width: 480px;
  text-align: center;
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
`
