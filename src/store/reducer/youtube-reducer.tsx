import { ActionTypes, IAction } from "../interfaces/IAction";
import { IVideoState } from "../interfaces/IVideoState";

const initialState: IVideoState = {
  isYoutubeClientLoaded: true,
};

export const YoutubeReducer = (currentState: IVideoState = initialState, action: IAction) => {

  if (action.type === ActionTypes.isYoutubeClientLoaded) {
    const state = { ...initialState, isYoutubeClientLoaded: true };
    return state; 
  }

  return currentState
};
