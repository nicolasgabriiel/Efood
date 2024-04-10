import pizza from '../../assets/images/pizza.svg'

import Description from '../Description'

import { Card, Image, Title, ButtonCard } from './style'
import { cores } from '../../styles'

const Restaurant = () => (
  <>
    <Card>
      <Image src={pizza} alt="Hioki Sushi" />
      <Title>Pizza Marguerita</Title>
      <Description color={cores.bege}>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Description>
      <ButtonCard>Adicionar ao carrinho</ButtonCard>
    </Card>
  </>
)
export default Restaurant
