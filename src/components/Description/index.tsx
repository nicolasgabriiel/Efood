import { ContainerDescription } from './style'

import { Props } from './style'

const Description = ({ color, children }: Props) => {
  return <ContainerDescription color={color}>{children}</ContainerDescription>
}

export default Description
