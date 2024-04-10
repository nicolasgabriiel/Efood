import { Logo } from '../../styles'
import background from '../../assets/images/background-header.svg'
import { HeaderContainer, Text } from './style'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const HeaderRestaurant = () => (
  <>
    <HeaderContainer style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <Link to={'/'} className="link">
          <Text>Restaurantes</Text>
        </Link>
        <Link to={'/'}>
          <Logo src={logo}></Logo>
        </Link>
        <Text>
          <span>0</span> Produto(s) no carrinho
        </Text>
      </div>
    </HeaderContainer>
  </>
)

export default HeaderRestaurant
