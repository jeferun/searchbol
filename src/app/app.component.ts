import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ImagesService } from './services/images.service';
import { setImage } from './store/images/image.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  categories: CategorySelect[] = [
    { value: 'all', label: 'Todas las categorias' },
    { value: 'people', label: 'Gente' },
    { value: 'science', label: 'Ciencia' },
    { value: 'education', label: 'Educación' },
    { value: 'feelings', label: 'Sentimientos' },
    { value: 'computer', label: 'Computadora' },
    { value: 'buildings', label: 'Edificios' },
  ];

  title = 'my-app';
  imageList: Image[] = [];
  loading: boolean = false;

  constructor(
    private _apiImages: ImagesService,
    private store: Store<any>,
  ) { }

  ngOnInit(): void {
    const params: Params = {
      category: '',
      text: '',
    }
    this.searchImages(params);
  }

  searchImages(params: Params) {
    this.imageList = [];
    this.loading = true;

    this._apiImages.getImages(params).subscribe((result: ApiResponse) => {
      this.loading = false;
      this.imageList = result.hits;
    });
  }

  setImageInfo(currentImage: Image) {
    this.store.dispatch(setImage({ currentImage }));
  }
}
