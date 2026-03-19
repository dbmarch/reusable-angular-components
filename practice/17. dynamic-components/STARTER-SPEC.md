# Dynamic Component Creation — Starter Project Spec

## Overview

This is a starter project for practicing dynamic component creation in Angular. All the UI
components, models, data, and styling are pre-built. The student's job is to wire everything
together using Angular's dynamic component APIs.

### The app

A product catalog that displays a list of products. The user can switch between three view
types — grid, list, and cards — each rendered by a different presenter component. A picker
control in the header lets the user select the active view. Clicking a product shows its
details in a sidebar.

### What the student will build

The starter code has all the pieces ready but none of them are connected dynamically. During
the lectures, students will:

1. **Use `NgComponentOutlet`** to render the active presenter component from a signal, swap it
   when the user changes the view type, and pass the products list via `ngComponentOutletInputs`.
2. **Create a view config array** that maps labels to component types, so adding a new view
   requires only one config entry — no template changes.
3. **Build a custom injector** with a `VIEW_ACTIONS` token to communicate item click events back
   from the presenter to the parent, since `NgComponentOutlet` has no output binding mechanism.
4. **Define a `ViewPicker` interface** with an `options` input and a `value` model, and create
   an injection token for the picker component type.
5. **Use `ViewContainerRef.createComponent()`** with the new bindings API (`inputBinding`,
   `twoWayBinding`) to programmatically create the picker, keeping the selected view in sync
   between the picker and the host.
6. **Swap the picker implementation** by providing a different component type through the token
   — proving that any component satisfying the `ViewPicker` interface can be plugged in without
   changing the host.

---

## Project Structure

```
src/app/
├── app.ts
├── app.html
├── app.scss
├── models/
│   └── product.model.ts
├── data/
│   └── products.data.ts
├── views/
│   ├── grid-view.ts
│   ├── grid-view.html
│   ├── grid-view.scss
│   ├── list-view.ts
│   ├── list-view.html
│   ├── list-view.scss
│   ├── cards-view.ts
│   ├── cards-view.html
│   └── cards-view.scss
└── pickers/
    ├── select-picker.ts
    ├── select-picker.html
    ├── tab-picker.ts
    └── tab-picker.html
```

---

## Models

### Product (`models/product.model.ts`)

```typescript
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
}
```

### ViewOption (NOT in starter code)

> The `ViewOption` interface, `ViewPicker` interface, `VIEW_ACTIONS` token, and `VIEW_PICKER`
> token are all created by the student during the lectures.

---

## Data

### Products (`data/products.data.ts`)

A hardcoded array of 8 products with realistic values.

```typescript
import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 79.99,
    rating: 4.5,
    imageUrl: 'https://picsum.photos/seed/headphones/200/200',
  },
  {
    id: 2,
    name: 'Running Shoes',
    category: 'Sports',
    price: 129.99,
    rating: 4.2,
    imageUrl: 'https://picsum.photos/seed/shoes/200/200',
  },
  {
    id: 3,
    name: 'Coffee Maker',
    category: 'Home',
    price: 49.99,
    rating: 4.7,
    imageUrl: 'https://picsum.photos/seed/coffee/200/200',
  },
  {
    id: 4,
    name: 'Backpack',
    category: 'Travel',
    price: 59.99,
    rating: 4.3,
    imageUrl: 'https://picsum.photos/seed/backpack/200/200',
  },
  {
    id: 5,
    name: 'Desk Lamp',
    category: 'Home',
    price: 34.99,
    rating: 4.1,
    imageUrl: 'https://picsum.photos/seed/lamp/200/200',
  },
  {
    id: 6,
    name: 'Yoga Mat',
    category: 'Sports',
    price: 24.99,
    rating: 4.6,
    imageUrl: 'https://picsum.photos/seed/yoga/200/200',
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 44.99,
    rating: 4.4,
    imageUrl: 'https://picsum.photos/seed/speaker/200/200',
  },
  {
    id: 8,
    name: 'Travel Mug',
    category: 'Travel',
    price: 19.99,
    rating: 4.0,
    imageUrl: 'https://picsum.photos/seed/mug/200/200',
  },
];
```

---

## View Components (Presenters)

All three are standalone components with a single signal input `items` of type `Product[]`.
They are fully functional — template, styles, and all. Each renders the same data differently.

### GridViewComponent (`views/grid-view.ts`)

- Standalone component, selector: `app-grid-view`
- Input: `items = input.required<Product[]>()`
- Template: CSS grid of product cards showing image, name, price
- Layout: 3 columns, compact cards with image on top, name and price below

### ListViewComponent (`views/list-view.ts`)

- Standalone component, selector: `app-list-view`
- Input: `items = input.required<Product[]>()`
- Template: vertical list with rows, each showing image thumbnail, name, category, price, and rating
- Layout: full-width rows, horizontal layout per item

### CardsViewComponent (`views/cards-view.ts`)

- Standalone component, selector: `app-cards-view`
- Input: `items = input.required<Product[]>()`
- Template: large cards with image, name, category, price, rating, and a short description area
- Layout: single column, more detail per card than grid view

### Click handling

All three view components render a `(click)` on each product item. In the starter code, the
click handler does nothing (empty method or `console.log`). During the lectures, students will
replace this with the injected `VIEW_ACTIONS.onItemSelect` call.

```typescript
// Starter code — placeholder
onItemClick(product: Product) {
  console.log('Selected:', product.name);
}
```

---

## Picker Components

Both are standalone components. In the starter code they have their inputs and model defined,
but they are NOT rendered anywhere — the student will create them dynamically during the lectures.

### SelectPickerComponent (`pickers/select-picker.ts`)

- Standalone component, selector: `app-select-picker`
- Input: `options = input.required<{ label: string; value: string }[]>()`
- Model: `value = model.required<string>()`
- Template: a `<select>` element bound to the model, `@for` over options
- On change: updates the `value` model

### TabPickerComponent (`pickers/tab-picker.ts`)

- Standalone component, selector: `app-tab-picker`
- Input: `options = input.required<{ label: string; value: string }[]>()`
- Model: `value = model.required<string>()`
- Template: horizontal row of buttons, active tab highlighted
- On click: updates the `value` model

> Note: The `options` type uses `{ label: string; value: string }` as a simple shape.
> During the lectures, students will define a `ViewOption` interface and adjust as needed.

---

## AppComponent (`app.ts` / `app.html`)

### Template layout

```html
<div class="catalog">
  <header class="catalog-header">
    <h1>Product Catalog</h1>
    <!-- Picker will be inserted here dynamically -->
    <div class="picker-slot" #pickerSlot></div>
  </header>

  <main class="catalog-content">
    <!-- Presenter will be rendered here dynamically -->
    <p class="placeholder">Select a view to display products</p>
  </main>

  <aside class="catalog-sidebar">
    <!-- Selected product details will appear here -->
    <p class="placeholder">Click a product to see details</p>
  </aside>
</div>
```

### Component class

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly products = signal(PRODUCTS);
}
```

> Minimal — no imports of dynamic component machinery yet. Students add everything
> during the lectures.

---

## Styles

### Global styles (`styles.scss`)

- Reset / normalize basics
- System font stack
- Light neutral background (`#f5f5f5`)

### AppComponent (`app.scss`)

- `.catalog` — CSS grid layout: header on top, content + sidebar below
- `.catalog-header` — flex row, space-between, holds title and picker slot
- `.catalog-content` — main area, padding
- `.catalog-sidebar` — fixed width (~300px), border-left, padding, shows selected product
- `.placeholder` — muted text, centered, italic
- `.picker-slot` — flex container for the dynamically inserted picker

### GridView (`grid-view.scss`)

- CSS grid, 3 columns, gap
- Cards: border, border-radius, overflow hidden
- Image: full width, fixed height, object-fit cover
- Text: padding below image, name bold, price muted

### ListView (`list-view.scss`)

- Vertical stack, gap between rows
- Each row: flex, horizontal, align-center
- Thumbnail: small fixed-size image, border-radius
- Details: flex-grow, name + category + rating inline
- Price: right-aligned

### CardsView (`cards-view.scss`)

- Single column, wider cards
- Image: larger, left-aligned or top
- More text area: name, category, price, rating, description placeholder
- Subtle shadow, rounded corners

### SelectPicker (inline styles or minimal)

- Styled `<select>`, fits in header

### TabPicker (inline styles or minimal)

- Horizontal flex row of buttons
- Active tab: bold, underline or background highlight
- Inactive: muted

---

## What is NOT in the starter code

The student builds all of the following during the lectures:

| What the student creates |
|------------------------|
| `NgComponentOutlet` usage in `app.html`, `activeView` signal |
| `ngComponentOutletInputs` binding |
| `ViewOption` type, view config array, wiring select to config |
| `VIEW_ACTIONS` token, custom `Injector`, injector wiring in template, `inject(VIEW_ACTIONS)` in presenters |
| `ViewPicker` interface, `VIEW_PICKER` token, provider |
| `VCR.createComponent()` call with `inputBinding` and `twoWayBinding` |
| Swap provider to `TabPickerComponent` |

---

## Notes

- All components are standalone (no NgModule).
- Use signal inputs (`input()`, `input.required()`) and `model()` — no decorators.
- No external UI library — plain HTML + CSS only.
- Images use `https://picsum.photos/seed/{keyword}/{w}/{h}` for deterministic placeholder images.
- The app should look presentable but not polished — focus is on dynamic components, not design.
