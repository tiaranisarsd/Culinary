import ListRestaurant from '../views/pages/list-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': ListRestaurant,
  '/list-restaurant': ListRestaurant,
  '/Culinary-/detail/:id': Detail,
  '/like': Like,
};

export default routes;
