import { Directive, effect, inject, Injector, input, TemplateRef, ViewContainerRef } from "@angular/core";
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from "@angular/material/core";

@Directive({
    selector: '[withDateLocale]'
})
export class WithDateLocale {
    readonly withDateLocale = input.required<string>();

    private readonly template = inject(TemplateRef);
    private readonly vcr = inject(ViewContainerRef);
    private readonly injector = inject(Injector);

    private invalidate() {
        const locale = this.withDateLocale();
        const viewInjector = Injector.create({
            parent: this.injector, 
            providers: [
                ...provideNativeDateAdapter(), 
                {
                    provide: MAT_DATE_LOCALE, 
                    useValue: locale
                }
            ]
        });
        this.vcr.clear();
        this.vcr.createEmbeddedView(this.template, undefined, {
            injector: viewInjector
        })
    }

    constructor() {
        effect(() => this.invalidate());
    }

}