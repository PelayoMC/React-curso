import * as ActionTypes from "./ActionTypes";

export const Feedback = (
  state = { errMessage: null, feedback: {} },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      var feedback = action.payload;
      return { ...state, feedback: state.comments.concat(feedback) };
    default:
      return state;
  }
};
