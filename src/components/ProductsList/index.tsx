import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { useGetCardapiosQuery } from '../../services/api'
import { add, open } from '../../store/reducers/cart'
import { getPriceInBRL } from '../../utils/functions'

import Products from '../Products'
import Description from '../Description'
import Loader from '../Loader'

import closeIcon from '../../assets/images/close.svg'

import { ButtonCard } from '../Products/style'
import * as S from './style'

const ProductsList = () => {
  const dispatch = useDispatch()

  const [isVisible, setIsVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Menu | null>(null)

  const { id } = useParams()

  const { data: restaurants } = useGetCardapiosQuery(id || '')

  const openModal = (cardapio: Menu) => {
    setIsVisible(true)
    setSelectedItem(cardapio)
  }

  const addToCart = () => {
    if (selectedItem) {
      dispatch(add(selectedItem))
      dispatch(open())
    }
  }

  if (!restaurants) {
    return <Loader />
  }
  return (
    <>
      <S.ContainerList>
        <div className="container">
          <S.List>
            {restaurants.cardapio.map((cardapio) => (
              <div
                key={cardapio.nome}
                onClick={() => {
                  openModal(cardapio)
                }}
              >
                <Products
                  description={cardapio.descricao}
                  image={cardapio.foto}
                  title={cardapio.nome}
                ></Products>
              </div>
            ))}
          </S.List>
        </div>
      </S.ContainerList>
      <S.Modal className={isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <div className="close">
            <img
              src={closeIcon}
              alt="Ícone de fechar"
              onClick={() => {
                setIsVisible(false)
              }}
            />
          </div>
          <img src={selectedItem?.foto} />
          <div className="container-text">
            <h4>{selectedItem?.nome}</h4>
            <Description color={`#fff`}>{selectedItem?.descricao}</Description>
            <div className="info">
              <p color={`#fff`}>Serve: {selectedItem?.porcao}</p>
            </div>
            <div onClick={addToCart}>
              <ButtonCard
                onClick={() => {
                  setIsVisible(false)
                }}
              >
                Adicionar ao carrinho -{' '}
                <span>{getPriceInBRL(selectedItem?.preco)}</span>
              </ButtonCard>
            </div>
          </div>
        </S.ModalContent>
        <div
          onClick={() => {
            setIsVisible(false)
          }}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  )
}

export default ProductsList
