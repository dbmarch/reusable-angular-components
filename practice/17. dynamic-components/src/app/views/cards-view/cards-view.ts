import { Component, inject, input, output } from '@angular/core';
import { CurrencyPipe, LowerCasePipe } from '@angular/common';
import { Product } from '../../models/product.model';
import { VIEW_ACTIONS } from '../../tokens/view-actions.token';

@Component({
  selector: 'app-cards-view',
  imports: [CurrencyPipe, LowerCasePipe],
  templateUrl: './cards-view.html',
  styleUrl: './cards-view.scss',
})
export class CardsViewComponent {
  readonly items = input.required<Product[]>();

  readonly selection = output<Product>();


  onItemClick(product: Product) {
    this.selection.emit(product);
  }
}
