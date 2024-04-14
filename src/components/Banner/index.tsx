import { useParams } from 'react-router-dom'

import Loader from '../Loader'
import { useGetCardapiosQuery } from '../../services/api'

import * as S from './style'

const Banner = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetCardapiosQuery(id || '')

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <S.BannerContainer style={{ backgroundImage: `url(${data?.capa})` }}>
        <div className="container">
          <S.Text>{data?.tipo}</S.Text>
          <S.TextBold>{data?.titulo}</S.TextBold>
        </div>
        <div className="overlay"></div>
      </S.BannerContainer>
    </>
  )
}
export default Banner
