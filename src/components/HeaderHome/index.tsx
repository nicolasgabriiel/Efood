import { Link } from 'react-router-dom'
import background from '../../assets/images/background-header.svg'
import logo from '../../assets/images/logo.svg'

import { Logo } from '../../styles'
import { Title, HeaderContainer } from './style'

const Header = () => (
  <>
    <HeaderContainer style={{ backgroundImage: `url(${background})` }}>
      <Link to={'/'}>
        <h1>
          <Logo src={logo} title="EFOOD" />
        </h1>
      </Link>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeaderContainer>
  </>
)

export default Header
