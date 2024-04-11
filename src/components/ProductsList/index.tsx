import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { useGetCardapiosQuery } from '../../services/api'
import { add, open } from '../../store/reducers/cart'
import { formataPreco } from '../../utils/functions'

import Products from '../Products'
import Description from '../Description'

import close from '../../assets/images/close.svg'

import { ButtonCard } from '../Products/style'
import { List, ContainerList, Modal, ModalContent } from './style'

export interface Cardapio {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const RestaurantList = () => {
  const dispatch = useDispatch()

  const [isVisible, setIsVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Cardapio | null>(null)

  const { id } = useParams()

  const { data: restaurantes } = useGetCardapiosQuery(id || '')

  const openModal = (cardapio: Cardapio) => {
    setIsVisible(true)
    setSelectedItem(cardapio)
  }

  const addToCart = () => {
    if (selectedItem) {
      dispatch(add(selectedItem))
      dispatch(open())
    }
  }

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <ContainerList>
        <div className="container">
          <List>
            {restaurantes.cardapio.map((cardapio) => (
              <div
                key={cardapio.nome}
                onClick={() => {
                  openModal(cardapio)
                }}
              >
                <Products
                  descricao={cardapio.descricao}
                  imagem={cardapio.foto}
                  titulo={cardapio.nome}
                ></Products>
              </div>
            ))}
          </List>
        </div>
      </ContainerList>
      <Modal className={isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <div className="close">
            <img
              src={close}
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
                <span>{formataPreco(selectedItem?.preco)}</span>
              </ButtonCard>
            </div>
          </div>
        </ModalContent>
        <div
          onClick={() => {
            setIsVisible(false)
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default RestaurantList
