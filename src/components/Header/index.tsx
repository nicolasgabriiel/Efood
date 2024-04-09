import background from '../../assets/images/background-header.svg'
import logo from '../../assets/images/logo.svg'

import { HeaderContainer, Logo, Title } from './style'

const Header = () => (
  <>
    <HeaderContainer style={{ backgroundImage: `url(${background})` }}>
      <Logo src={logo} />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeaderContainer>
  </>
)

export default Header
