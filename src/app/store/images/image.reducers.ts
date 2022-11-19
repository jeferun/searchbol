import { createReducer, on } from "@ngrx/store";
import { setImage } from "./image.actions";

export const initialState: ImageState = { currentImage: {} }

export const imageReducer = createReducer(
  initialState,
  on(setImage, (state, { currentImage }) => {
    return { ...state, currentImage }
  })
);