import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'

import { CartPage } from '../../utils/enums'

import { clear, close, remove } from '../../store/reducers/cart'
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

const Cart = () => {
  const dispatch = useDispatch()
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  //Functions
  const closeCart = () => {
    dispatch(close())
    setCartPageOpen(CartPage.Cart)
    if (isSuccess) {
      form.resetForm()
    }
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

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardMonth: '',
      cardYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'o endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'o numero precisa ter pelo menos 1 caractere')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP deve ter 9 caracteres')
        .max(10, 'O CEP deve ter 9 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .required('O campo é obrigatório')
        .min(5, 'O nome precisa ter pelo menos 5 caracteres'),
      cardNumber: Yup.string()
        .required('O campo é obrigatório')
        .min(19, 'O cartão deve ter 16 digitos')
        .max(20, 'O cartão deve ter 16 digitos'),
      cardCode: Yup.string()
        .required('O campo é obrigatório')
        .min(3, 'O código de segurança deve ter 3 digitos')
        .max(4, 'O código de segurança deve ter 3 digitos'),
      cardMonth: Yup.string()
        .required('O campo é obrigatório')
        .min(2, 'O mês deve ter 2 digitos')
        .max(3, 'O mês deve ter 2 digitos'),
      cardYear: Yup.string()
        .required('O campo é obrigatório')
        .min(4, 'O ano deve ter 4 digitos')
        .max(5, 'O ano deve ter 4 digitos')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardMonth),
              year: Number(values.cardYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }
  const checkAdressChekout = () => {
    if (
      checkInputHasError('receiver') === true &&
      checkInputHasError('description') === true &&
      checkInputHasError('city') === true &&
      checkInputHasError('zipCode') === true &&
      checkInputHasError('number') === true
    ) {
      return true
    } else if (
      'receiver' in form.touched === false ||
      'description' in form.touched === false ||
      'city' in form.touched === false ||
      'zipCode' in form.touched === false ||
      'number' in form.touched === false
    ) {
      return true
    }
    return false
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      setCartPageOpen(CartPage.Order)
    }
  }, [isSuccess, dispatch])

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {cartPageOpen === CartPage.Cart && (
          <div>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{formataPreco(item.preco)}</span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
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
              </>
            ) : (
              <>
                <div className="empty">
                  <h3>Carrinho vazio...</h3>
                  <p>
                    Por favor adicione algum item ao carrinho para continuar
                  </p>
                </div>
              </>
            )}
          </div>
        )}
        <form onSubmit={form.handleSubmit}>
          {cartPageOpen === CartPage.Adress && (
            <AdressContainer>
              <h1>Entrega</h1>
              <div className="formGroup">
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  type="text"
                  id="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="description">Endereço</label>
                <input
                  type="text"
                  id="description"
                  value={form.values.description}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('description') ? 'error' : ''}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </div>
              <div className="display-flex">
                <div className="formGroup">
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    type="text"
                    id="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    mask="99999-999"
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    id="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </div>
              </div>
              <div className="formGroup">
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </div>
              <button
                onClick={() => setCartPageOpen(CartPage.Payment)}
                disabled={checkAdressChekout()}
                className={
                  checkAdressChekout() ? 'margin-top disabled' : 'margin-top '
                }
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
              <h1>
                Pagamento - Valor a Pagar {formataPreco(getTotalPrice())}{' '}
              </h1>
              <div className="formGroup">
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  type="text"
                  id="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardName') ? 'error' : ''}
                />
              </div>
              <div className="display-flex">
                <div className="formGroup">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </div>
                <div className="formGroup max-width">
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    type="text"
                    id="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                  />
                </div>
              </div>
              <div className="display-flex">
                <div className="formGroup">
                  <label htmlFor="cardMonth">Mês de Vencimento</label>
                  <InputMask
                    type="text"
                    id="cardMonth"
                    value={form.values.cardMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardMonth') ? 'error' : ''}
                    mask="99"
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="cardYear">Ano de Vencimento</label>
                  <InputMask
                    type="text"
                    id="cardYear"
                    value={form.values.cardYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardYear') ? 'error' : ''}
                    mask="9999"
                  />
                </div>
              </div>
              <button
                className="margin-top"
                type="submit"
                onClick={() => form.handleSubmit}
                title="Clique aqui para finalizar a compra"
                disabled={isLoading}
              >
                {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
              </button>
              <button onClick={() => setCartPageOpen(CartPage.Adress)}>
                Voltar para a edição de endereço
              </button>
            </CardPaymentContainer>
          )}
        </form>
        {cartPageOpen === CartPage.Order && (
          <OrderContainer>
            <h1>Pedido Realizado - {data?.orderId}</h1>
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
