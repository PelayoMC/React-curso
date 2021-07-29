import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";

export const addComment = (dishId, rating, author, comment) => ({
  types: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => ({
  types: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errMessage) => ({
  types: ActionTypes.DISHES_FAILED,
  payload: errMessage,
});

export const addDishes = (dishes) => ({
  types: ActionTypes.ADD_DISHES,
  payload: dishes,
});
