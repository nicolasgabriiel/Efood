import { getDescricao } from '../../utils/functions'
import Description from '../Description'

import { Card, Image, Title, ButtonCard } from './style'
import { cores } from '../../styles'

type Props = {
  imagem: string
  titulo: string
  descricao: string
}

const Restaurant = ({ imagem, titulo, descricao }: Props) => {
  return (
    <>
      <Card>
        <Image src={imagem} alt="Hioki Sushi" />
        <Title>{titulo}</Title>
        <Description color={cores.bege}>
          {getDescricao(descricao, 170)}
        </Description>
        <ButtonCard>Mais Detalhes</ButtonCard>
      </Card>
    </>
  )
}
export default Restaurant
