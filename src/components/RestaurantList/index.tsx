import Restaurant from '../Restaurant'
import * as S from './style'

import Loader from '../Loader'
import { useGetRestaurantsQuery } from '../../services/api'

const RestaurantList = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  if (restaurantes) {
    return (
      <S.ContainerList>
        <div className="container">
          <S.List className="custom-list">
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
          </S.List>
        </div>
      </S.ContainerList>
    )
  } else {
    return <Loader />
  }
}
export default RestaurantList
