import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import logo from '../../assets/images/logo.svg'

import { Logo } from '../../styles'
import * as S from './style'
import { Link } from 'react-router-dom'

const Footer = () => (
  <>
    <S.ContainerFooter>
      <Link to={'/'}>
        <Logo src={logo} title="EFOOD"></Logo>
      </Link>
      <S.ContainerSocial>
        <S.Social src={instagram} alt="Instagram" />
        <S.Social src={facebook} alt="facebook" />
        <S.Social src={twitter} alt="twitter" />
      </S.ContainerSocial>
      <S.Copywrite>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Copywrite>
    </S.ContainerFooter>
  </>
)

export default Footer
