import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  max-width: 540px;
  text-align: center;
  margin: 138px auto 0 auto;
  color: ${cores.rosa};
  @media (max-width: ${breakpoints.tablet}) {
    margin: 48px auto 0 auto;
    font-size: 22px;
    max-width: 80%;
  }
`
export const HeaderContainer = styled.header`
  padding: 64px 0 40px 0;
  background-size: cover;
  margin: 0 auto;
`
