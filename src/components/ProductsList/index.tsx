import { useEffect, useState } from 'react'
import Products from '../Products'
import { List, ContainerList, Modal, ModalContent } from './style'

import close from '../../assets/images/close.svg'
import Description from '../Description'

import { ButtonCard } from '../Products/style'
import { useParams } from 'react-router-dom'

interface Cardapio {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}
type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const RestaurantList = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Cardapio | null>(null) // Estado para armazenar o item do cardápio selecionado

  const { id } = useParams()

  const [restaurantes, setRestaurantes] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [id])

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  const openModal = (cardapio: Cardapio) => {
    setIsVisible(true)
    setSelectedItem(cardapio)
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
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
            <ButtonCard>
              Adicionar ao carrinho -{' '}
              <span>{formataPreco(selectedItem?.preco)}</span>
            </ButtonCard>
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
