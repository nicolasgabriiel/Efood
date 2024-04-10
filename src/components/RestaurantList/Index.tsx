import Restaurant from '../Restaurant'
import { List, ContainerList } from './style'

const RestaurantList = () => {
  return (
    <ContainerList>
      <div className="container">
        <List>
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
        </List>
      </div>
    </ContainerList>
  )
}
export default RestaurantList
