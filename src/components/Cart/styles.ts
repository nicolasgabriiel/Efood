import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonCard } from '../Products/style'

import lixeira from '../../assets/images/lixeira.svg'
import { darken, lighten } from 'polished'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
  .empty {
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    color: ${colors.beige};
    p {
      font-size: 16px;
      max-width: 250px;
      margin: 20px auto;
    }
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonCard} {
    max-width: 100%;
    width: 100%;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      background-color: ${darken(0.08, colors.beige)};
      color: ${darken(0.08, colors.pink)};
    }
  }
`
export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.white};
    margin: 24px 0 16px 0;
  }
`
export const CartItem = styled.li`
  display: flex;
  background: ${colors.beige};
  padding: 8px;
  position: relative;
  width: 100%;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.pink};
    font-weight: 900;
    font-size: 18px;
  }

  span {
    display: block;
    color: ${colors.pink};
    font-weight: 400;
    font-size: 14px;
    margin-top: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
  }
`
export const AdressContainer = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.beige};
  h1 {
    font-size: 16px;
    margin-bottom: 8px;
  }
  .formGroup {
    margin-top: 8px;
    display: inline-block;
    width: 100%;
    label {
      display: block;
      margin-bottom: 8px;
    }
    input {
      padding: 8px;
      color: black;
      width: 100%;
      border: 2px solid ${colors.beige};
      background-color: ${colors.beige};
    }
    .error {
      border: 2px solid red;
    }
  }
  .display-flex {
    display: flex;
    justify-content: space-between;
    gap: 34px;
  }
  button {
    border: none;
    color: ${colors.pink};
    font-weight: bold;
    padding: 4px 0;
    width: 100%;
    text-align: center;
    margin-bottom: 8px;
    background-color: ${colors.beige};
    font-size: 14px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      background-color: ${darken(0.08, colors.beige)};
      color: ${darken(0.08, colors.pink)};
    }
  }
  .margin-top {
    margin-top: 24px;
  }
  .disabled {
    background-color: ${lighten(0.1, colors.beige)};
    color: ${lighten(0.2, colors.pink)};
    &:hover {
      cursor: auto;
      background-color: ${lighten(0.1, colors.beige)};
      color: ${lighten(0.2, colors.pink)};
    }
  }
`
export const CardPaymentContainer = styled(AdressContainer)`
  .max-width {
    max-width: 90px;
  }
`
export const OrderContainer = styled.div`
  color: ${colors.beige};
  h1 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 24px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
  button {
    border: none;
    color: ${colors.pink};
    font-weight: bold;
    padding: 4px 0;
    width: 100%;
    text-align: center;
    margin-bottom: 8px;
    background-color: ${colors.beige};
    font-size: 14px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      background-color: ${darken(0.08, colors.beige)};
      color: ${darken(0.08, colors.pink)};
    }
  }
`
