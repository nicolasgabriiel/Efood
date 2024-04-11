import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  rosa: '#E66767',
  bege: '#FFEBD9',
  begeClaro: '#FFF8F1'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
  .custom-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
export const Logo = styled.img`
  display: block;
  height: 58px;
  margin: 0 auto;
`
