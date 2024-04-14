import { Link } from 'react-router-dom'
import background from '../../assets/images/background-header.svg'
import logo from '../../assets/images/logo.svg'

import { Logo } from '../../styles'
import * as S from './style'

const Header = () => (
  <>
    <S.HeaderContainer style={{ backgroundImage: `url(${background})` }}>
      <Link to={'/'}>
        <h1>
          <Logo src={logo} title="EFOOD" />
        </h1>
      </Link>
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </S.HeaderContainer>
  </>
)

export default Header
