import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import background from '../../assets/images/background-header.svg'
import logo from '../../assets/images/logo.svg'

import { Logo } from '../../styles'
import * as S from './style'

const HeaderRestaurant = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
    console.log('abriu')
  }
  return (
    <>
      <S.HeaderContainer style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <Link
            to={'/'}
            className="link"
            title="Voltar para a página dos restaurantes"
          >
            <S.Text>Restaurantes</S.Text>
          </Link>
          <Link to={'/'}>
            <Logo src={logo}></Logo>
          </Link>
          <button title="Ir para o carrinho">
            <S.Text onClick={openCart}>
              <span>{items.length}</span> Produto(s) no carrinho
            </S.Text>
          </button>
        </div>
      </S.HeaderContainer>
    </>
  )
}

export default HeaderRestaurant
