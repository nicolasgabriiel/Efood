import { Link } from 'react-router-dom'

import Description from '../Description'
import Tag from '../Tag'
import star from '../../assets/images/star.svg'

import { cores } from '../../styles'
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
      <Card>
        <Infos>
          {destacado && <Tag>Destaque da semana</Tag>}
          <Tag>{infos}</Tag>
        </Infos>
        <Image src={image} alt={title} />
        <ContainerText>
          <div>
            <ContainerTitle>
              <Title>{title}</Title>
              <ContainerTitle>
                <Title>{nota}</Title>
                <Star src={star} />
              </ContainerTitle>
            </ContainerTitle>
            <ContainerDescription>
              <Description color={cores.rosa}>{description}</Description>
            </ContainerDescription>
          </div>
          <Link to={`restaurant/${id}`}>
            <Tag size="big" title={`Saiba mais sobre ${title}`}>
              Saiba mais
            </Tag>
          </Link>
        </ContainerText>
      </Card>
    </>
  )
}
export default Restaurant
