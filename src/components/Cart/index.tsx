import { useDispatch, useSelector } from 'react-redux'

import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formataPreco } from '../../utils/functions'

import { ButtonCard } from '../Products/style'
import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  //Functions
  const closeCart = () => {
    dispatch(close())
  }
  const getTotalPrice = () => {
    if (items) {
      return items.reduce((acumulador, valorAtual) => {
        return (acumulador += valorAtual.preco)
      }, 0)
    }
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor Total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Prices>
        <ButtonCard
          title="Clique aqui para continuar com a compra"
          type="button"
        >
          Continuar com a compra
        </ButtonCard>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
