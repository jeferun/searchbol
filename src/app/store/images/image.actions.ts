import { createAction, props } from "@ngrx/store";

export const getImages = createAction(
  '[image list] get image',
);

export const setImage = createAction(
  '[image list] set image',
  props<{ currentImage: Image }>()
);