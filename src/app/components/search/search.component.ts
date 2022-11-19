import { Component, EventEmitter, Output } from '@angular/core';
import { CONSTANTS } from 'src/app/utils/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  @Output() selectedParams = new EventEmitter<Params>();
  selectedCategory: string = CONSTANTS.SELECTED_CATEGORY;
  text: string = '';

  categories: CategorySelect[] = [
    {value: 'all', label: 'Todas las categorias'},
    {value: 'people', label: 'Gente'},
    {value: 'science', label: 'Ciencia'},
    {value: 'education', label: 'Educación'},
    {value: 'feelings', label: 'Sentimientos'},
    {value: 'computer', label: 'Computadora'},
    {value: 'buildings', label: 'Edificios'},
  ];

  constructor() {}

  setParams() {
    const params = {
      category: this.selectedCategory,
      text: this.text,
    }
    
    this.selectedParams.emit(params)
  }
}
