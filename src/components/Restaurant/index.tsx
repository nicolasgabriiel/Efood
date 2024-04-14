import { Link } from 'react-router-dom'

import Description from '../Description'
import Tag from '../Tag'
import star from '../../assets/images/star.svg'

import { colors } from '../../styles'
import * as S from './style'

type Props = {
  title: string
  image: string
  infos: string
  id: number
  description: string
  nota: number
  destacado: boolean
}

const Restaurant = ({
  title,
  image,
  description,
  infos,
  nota,
  destacado,
  id
}: Props) => {
  return (
    <>
      <S.Card>
        <S.Infos>
          {destacado && <Tag>Destaque da semana</Tag>}
          <Tag>{infos}</Tag>
        </S.Infos>
        <S.Image src={image} alt={title} />
        <S.ContainerText>
          <div>
            <S.ContainerTitle>
              <S.Title>{title}</S.Title>
              <S.ContainerTitle>
                <S.Title>{nota}</S.Title>
                <S.Star src={star} />
              </S.ContainerTitle>
            </S.ContainerTitle>
            <S.ContainerDescription>
              <Description color={colors.pink}>{description}</Description>
            </S.ContainerDescription>
          </div>
          <Link to={`restaurant/${id}`}>
            <Tag size="big" title={`Saiba mais sobre ${title}`}>
              Saiba mais
            </Tag>
          </Link>
        </S.ContainerText>
      </S.Card>
    </>
  )
}
export default Restaurant
