import styled from 'styled-components'
import { colors } from '../../styles'
import { darken } from 'polished'

import { Props } from '.'

export const TagContainer = styled.button<Props>`
  background-color: ${colors.pink};
  color: ${colors.lightBeige};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-right: 8px;
  border: none;
  transition: 0.3s;
  cursor: ${(props) => (props.size === 'big' ? 'pointer' : 'auto')};
  &:hover {
    background-color: ${(props) =>
      props.size === 'big' ? darken(0.1, colors.pink) : colors.pink};
  }
`
