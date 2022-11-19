import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CONSTANTS } from 'src/app/utils/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  @Output() selectedParams = new EventEmitter<Params>();
  handleSelected: string = CONSTANTS.SELECTED_CATEGORY;
  @Input() categoriesData: CategorySelect[] = [];
  text: string = '';

  constructor() {}

  setParams() {
    const params = {
      category: this.handleSelected,
      text: this.text,
    }
    
    this.selectedParams.emit(params)
  }
}
