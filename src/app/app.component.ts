import { Component, OnInit } from '@angular/core';
import { ImagesService } from './services/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  imageList: Image[] = [];
  loading: boolean = false;

  constructor(private _apiImages: ImagesService) { }

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

    setTimeout(() => {
      this._apiImages.getImages(params).subscribe((result: ApiResponse) => {
        this.loading = false;
        this.imageList = result.hits;
      });
      
    }, 2000);

  }
}
