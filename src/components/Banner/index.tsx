import { BannerContainer, Text, TextBold } from './style'
import restaurntImg from '../../assets/images/sushi.svg'

const Banner = () => {
  return (
    <>
      <BannerContainer style={{ backgroundImage: `url(${restaurntImg})` }}>
        <div className="container">
          <Text>Japonesa</Text>
          <TextBold>Hioki Sushi</TextBold>
        </div>
      </BannerContainer>
    </>
  )
}
export default Banner
