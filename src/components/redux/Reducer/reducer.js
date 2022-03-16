import { SET_USER } from "../Constant/constant";

const initialState = {
  user: {
      name:"Satish",
      address:"Surat City"      
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
