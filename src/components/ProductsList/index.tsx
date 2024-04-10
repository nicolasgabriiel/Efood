import Products from '../Products'
import { List, ContainerList } from './style'

const RestaurantList = () => (
  <ContainerList>
    <div className="container">
      <List>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
      </List>
    </div>
  </ContainerList>
)

export default RestaurantList
