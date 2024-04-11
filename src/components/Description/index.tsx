import { Props } from './style'

import { ContainerDescription } from './style'

const Description = ({ color, children }: Props) => {
  return <ContainerDescription color={color}>{children}</ContainerDescription>
}

export default Description
