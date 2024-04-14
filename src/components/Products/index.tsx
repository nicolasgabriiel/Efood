import { getDescription } from '../../utils/functions'
import Description from '../Description'

import * as S from './style'
import { colors } from '../../styles'

type Props = {
  image: string
  title: string
  description: string
}

const Restaurant = ({ image, title, description }: Props) => {
  return (
    <>
      <S.Card>
        <S.Image src={image} alt="Hioki Sushi" />
        <S.Title>{title}</S.Title>
        <Description color={colors.beige}>
          {getDescription(description, 170)}
        </Description>
        <S.ButtonCard title={`Ver mais detalhes sobre ${title}`}>
          Mais Detalhes
        </S.ButtonCard>
      </S.Card>
    </>
  )
}
export default Restaurant
