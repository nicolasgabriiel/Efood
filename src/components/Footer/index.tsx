import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import logo from '../../assets/images/logo.svg'

import { Logo } from '../../styles'
import { ContainerFooter, ContainerSocial, Copywrite, Social } from './style'

const Footer = () => (
  <>
    <ContainerFooter>
      <Logo src={logo}></Logo>
      <ContainerSocial>
        <Social src={instagram} />
        <Social src={facebook} />
        <Social src={twitter} />
      </ContainerSocial>
      <Copywrite>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Copywrite>
    </ContainerFooter>
  </>
)

export default Footer
