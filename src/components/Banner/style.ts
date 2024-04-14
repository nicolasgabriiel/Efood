import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const BannerContainer = styled.div`
  background-position: center;
  background-size: cover;
  height: 280px;
  position: relative;
  .container {
    padding: 25px 0 32px 0;
    z-index: 1;
    position: relative;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    content: '';
  }
`

export const Text = styled.h3`
  color: #fff;
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 156px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 22px;
  }
`
export const TextBold = styled(Text)`
  font-weight: 900;
  margin-bottom: 0;
`
