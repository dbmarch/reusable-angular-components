import { InjectionToken, InputSignal, ModelSignal, Type } from '@angular/core';

export interface ViewPicker {
  readonly options: InputSignal<{ label: string; value: string }[]>;
  readonly value: ModelSignal<string>;
}

export const VIEW_PICKER = new InjectionToken<Type<ViewPicker>>('VIEW_PICKER');
