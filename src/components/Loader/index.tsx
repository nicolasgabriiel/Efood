import { DotLoader } from 'react-spinners'

import { colors } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <DotLoader color={colors.pink} />
  </Container>
)

export default Loader
