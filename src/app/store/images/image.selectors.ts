import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

const selectorImage = (state: AppState) => state.image;

export const getImage = createSelector(
  selectorImage,
  (image) => image.currentImage
);