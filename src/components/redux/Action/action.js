import { SET_USER,REMOVE_USER } from "../Constant/constant";

export const setUser = (data) => {
  return { 
      type: SET_USER, 
      payload: data 
    };
};
export const removedUser=(id)=>{
    return {
        type:REMOVE_USER,
        payload:id
    }
}
