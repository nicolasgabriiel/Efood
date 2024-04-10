import { Link } from 'react-router-dom'

import sushi from '../../assets/images/sushi.svg'
import star from '../../assets/images/star.svg'

import Tag from '../Tag'
import Description from '../Description'

import {
  Card,
  ContainerDescription,
  ContainerText,
  ContainerTitle,
  Image,
  Star,
  Title,
  Infos
} from './style'
import { cores } from '../../styles'

const Restaurant = () => (
  <>
    <Card>
      <Infos>
        <Tag>Destaque da semana</Tag>
        <Tag>Japonesa</Tag>
      </Infos>
      <Image src={sushi} alt="Hioki Sushi" />
      <ContainerText>
        <ContainerTitle>
          <Title>Hioki Sushi</Title>
          <ContainerTitle>
            <Title>4.9</Title>
            <Star src={star} />
          </ContainerTitle>
        </ContainerTitle>
        <ContainerDescription>
          <Description color={cores.rosa}>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade garantida.
            Experimente o Japão sem sair do lar com nosso delivery!
          </Description>
        </ContainerDescription>
        <Link to={'/restaurant'}>
          <Tag size="big">Saiba Mais</Tag>
        </Link>
      </ContainerText>
    </Card>
  </>
)
export default Restaurant
