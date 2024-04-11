import { useEffect, useState } from 'react'
import Restaurant from '../Restaurant'
import { List, ContainerList } from './style'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  caradapio: Cardapio[]
}
type Cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const RestaurantList = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <ContainerList>
      <div className="container">
        <List className="custom-list">
          {restaurantes.map((restaurante) => (
            <li key={restaurante.id}>
              <Restaurant
                id={restaurante.id}
                title={restaurante.titulo}
                image={restaurante.capa}
                description={restaurante.descricao}
                infos={restaurante.tipo}
                nota={restaurante.avaliacao}
                destacado={restaurante.destacado}
              />
            </li>
          ))}
        </List>
      </div>
    </ContainerList>
  )
}
export default RestaurantList
