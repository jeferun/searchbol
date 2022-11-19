import { ActionReducerMap } from "@ngrx/store"
import { imageReducer } from "./images/image.reducers"

export interface AppState {
  image: ImageState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  image: imageReducer,
}