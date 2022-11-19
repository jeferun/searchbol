import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getImage } from 'src/app/store/images/image.selectors';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit{

  currentImage$: Observable<Image | Obj> = new Observable;
  title = 'Vista Previa';
  tags: string[] = [];

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.currentImage$ = this.store.select(getImage);

    this.currentImage$.subscribe(image => {
      const tagsString = image.tags as string;
      const tags = tagsString ? tagsString.split(',') : [];
      this.tags = tags
    });
  }
}
