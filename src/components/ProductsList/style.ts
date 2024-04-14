import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonCard } from '../Products/style'

export const ContainerList = styled.section`
  background-color: ${cores.begeClaro};
  padding: 56px 0 120px 0;
`

export const List = styled.ul`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: none;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  padding: 32px;
  background-color: ${cores.rosa};
  display: flex;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
    flex-direction: column;
    gap: 12px;
  }

  .close {
    position: absolute;
    width: 16px;
    top: 8px;
    right: 8px;
  }

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    display: block;
    @media (max-width: ${breakpoints.tablet}) {
      width: 180px;
      height: 180px;
      margin: 0 auto;
    }
  }
  .container-text {
    margin-left: 24px;
  }
  h4 {
    margin-bottom: 16px;
    color: #fff;
    font-size: 18px;
    font-weight: 900;
  }
  .info {
    margin: 22px 0 15px 0;
    p {
      font-size: 14px;
      line-height: 22px;
      color: #fff;
    }
  }
  ${ButtonCard} {
    display: inline-block;
    width: auto;
    padding: 4px 8px;
  }
`
