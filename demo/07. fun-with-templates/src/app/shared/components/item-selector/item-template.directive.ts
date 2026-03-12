import { Directive, inject, TemplateRef } from "@angular/core";

export interface ItemTemplateContext {
    readonly $implicit: string;
}

@Directive({
    selector: '[appItemTemplate]'
})
export class ItemTemplateDirective {
    readonly template = inject(TemplateRef<ItemTemplateContext>);

    static ngTemplateContextGuard(_: ItemTemplateDirective, ctx: unknown): ctx is ItemTemplateContext {
        return true;
    }
}