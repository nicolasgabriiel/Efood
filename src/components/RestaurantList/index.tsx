import Restaurant from '../Restaurant'
import { List, ContainerList } from './style'

import Loader from '../Loader'
import { useGetRestaurantsQuery } from '../../services/api'

const RestaurantList = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  if (restaurantes) {
    return (
      <ContainerList>
        <div className="container">
          <List className="custom-list">
            {restaurantes.map((restaurante) => (
              <Restaurant
                key={restaurante.id}
                id={restaurante.id}
                title={restaurante.titulo}
                image={restaurante.capa}
                description={restaurante.descricao}
                infos={restaurante.tipo}
                nota={restaurante.avaliacao}
                destacado={restaurante.destacado}
              />
            ))}
          </List>
        </div>
      </ContainerList>
    )
  } else {
    return <Loader />
  }
}
export default RestaurantList
