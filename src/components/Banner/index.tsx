import { useParams } from 'react-router-dom'

import { useGetCardapiosQuery } from '../../services/api'

import { BannerContainer, Text, TextBold } from './style'

const Banner = () => {
  const { id } = useParams()
  const { data } = useGetCardapiosQuery(id || '')

  return (
    <>
      <BannerContainer style={{ backgroundImage: `url(${data?.capa})` }}>
        <div className="container">
          <Text>{data?.tipo}</Text>
          <TextBold>{data?.titulo}</TextBold>
        </div>
        <div className="overlay"></div>
      </BannerContainer>
    </>
  )
}
export default Banner
