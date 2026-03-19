import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';
import { VIEW_ACTIONS } from '../../tokens/view-actions.token';

@Component({
  selector: 'app-list-view',
  imports: [CurrencyPipe],
  templateUrl: './list-view.html',
  styleUrl: './list-view.scss',
})
export class ListViewComponent {
  items = input.required<Product[]>();

  private readonly viewActions = inject(VIEW_ACTIONS, { optional: true });

  onItemClick(product: Product) {
    this.viewActions?.onItemSelect(product);
  }
}
