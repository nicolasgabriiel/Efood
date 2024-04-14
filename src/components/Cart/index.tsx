import { useDispatch, useSelector } from 'react-redux'

import { CartPage } from '../../utils/enums'

import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formataPreco } from '../../utils/functions'

import { ButtonCard } from '../Products/style'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem,
  AdressContainer,
  CardPaymentContainer,
  OrderContainer
} from './styles'
import { useState } from 'react'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  //Functions
  const closeCart = () => {
    dispatch(close())
    setCartPageOpen(CartPage.Cart)
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

  const [cartPageOpen, setCartPageOpen] = useState<CartPage>(CartPage.Cart)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {cartPageOpen === CartPage.Cart && (
          <div>
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
              onClick={() => setCartPageOpen(CartPage.Adress)}
            >
              Continuar com a compra
            </ButtonCard>
          </div>
        )}
        {cartPageOpen === CartPage.Adress && (
          <AdressContainer>
            <h1>Entrega</h1>
            <div className="formGroup">
              <label htmlFor="receiver">Quem irá receber</label>
              <input type="text" id="receiver" />
            </div>
            <div className="formGroup">
              <label htmlFor="description">Endereço</label>
              <input type="text" id="description" />
            </div>
            <div className="formGroup">
              <label htmlFor="city">Cidade</label>
              <input type="text" id="city" />
            </div>
            <div className="display-flex">
              <div className="formGroup">
                <label htmlFor="zipCode">CEP</label>
                <input type="text" id="zipCode" />
              </div>
              <div className="formGroup">
                <label htmlFor="number">Número</label>
                <input type="text" id="number" />
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="complement">Complemento (opcional)</label>
              <input type="text" id="complement" />
            </div>
            <button
              className="margin-top"
              onClick={() => setCartPageOpen(CartPage.Payment)}
            >
              Continuar com o Pagamento
            </button>
            <button onClick={() => setCartPageOpen(CartPage.Cart)}>
              Voltar para o carrinho
            </button>
          </AdressContainer>
        )}
        {cartPageOpen === CartPage.Payment && (
          <CardPaymentContainer>
            <h1>Pagamento - Valor a Pagar {formataPreco(getTotalPrice())} </h1>
            <div className="formGroup">
              <label htmlFor="cardName">Nome no cartão</label>
              <input type="text" id="cardName" />
            </div>
            <div className="display-flex">
              <div className="formGroup">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input type="text" id="cardNumber" />
              </div>
              <div className="formGroup max-width">
                <label htmlFor="cardCode">CVV</label>
                <input type="text" id="cardCode" />
              </div>
            </div>
            <div className="display-flex">
              <div className="formGroup">
                <label htmlFor="cardMonth">Mês de Vencimento</label>
                <input type="text" id="cardMonth" />
              </div>
              <div className="formGroup">
                <label htmlFor="cardYear">Ano de Vencimento</label>
                <input type="text" id="cardYear" />
              </div>
            </div>
            <button
              className="margin-top"
              onClick={() => setCartPageOpen(CartPage.Order)}
            >
              Finalizar Pagamento
            </button>
            <button onClick={() => setCartPageOpen(CartPage.Adress)}>
              Voltar para a edição de endereço
            </button>
          </CardPaymentContainer>
        )}
        {cartPageOpen === CartPage.Order && (
          <OrderContainer>
            <h1>Pedido Realizado - Ordem do Pedido</h1>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.{' '}
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <button onClick={closeCart}>Concluir</button>
          </OrderContainer>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
