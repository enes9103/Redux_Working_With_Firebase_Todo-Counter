import { DECREASE_COUNTER, INCREASE_COUNTER, RESET } from "../types/counterTypes";

const initialState = {
  counter: 10,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};
export default counterReducer;
