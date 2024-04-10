import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-position: center;
  background-size: cover;
  height: 280px;
  position: relative;
  .container {
    padding: 25px 0 32px 0;
  }
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.04);
  }
`

export const Text = styled.h3`
  color: #fff;
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 156px;
`
export const TextBold = styled(Text)`
  font-weight: 900;
  margin-bottom: 0;
`