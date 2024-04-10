import { useState } from 'react'
import Products from '../Products'
import { List, ContainerList, Modal, ModalContent } from './style'

import close from '../../assets/images/close.svg'
import pizza from '../../assets/images/pizza.svg'
import Description from '../Description'

import { ButtonCard } from '../Products/style'

const RestaurantList = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <ContainerList>
        <div className="container">
          <List>
            <div
              onClick={() => {
                setIsVisible(true)
                console.log('cliquei')
              }}
            >
              <Products></Products>
            </div>
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
                console.log('cliquei')
              }}
            />
          </div>
          <img src={pizza} />
          <div className="container-text">
            <h4>Pizza Marguerita</h4>
            <Description color={`#fff`}>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </Description>
            <div className="info">
              <Description color={`#fff`}>Serve: de 2 a 3 pessoas</Description>
            </div>
            <ButtonCard>
              Adicionar ao carrinho - <span>R$ 60,99</span>
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
