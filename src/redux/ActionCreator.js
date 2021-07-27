import * as ActionTypes from "./ActionTypes";

export const addComment = (dishId, rating, author, comment) => ({
  types: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});
