import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';
import { VIEW_ACTIONS } from '../../tokens/view-actions.token';

@Component({
  selector: 'app-grid-view',
  imports: [CurrencyPipe],
  templateUrl: './grid-view.html',
  styleUrl: './grid-view.scss',
})
export class GridViewComponent {
  items = input.required<Product[]>();

  private readonly viewActions = inject(VIEW_ACTIONS, { optional: true });

  onItemClick(product: Product) {
    this.viewActions?.onItemSelect(product);
  }
}
