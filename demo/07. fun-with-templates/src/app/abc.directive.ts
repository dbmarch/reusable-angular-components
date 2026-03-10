import { Directive, ElementRef, inject } from "@angular/core";

@Directive({
    selector: '[abc]'
})
export class AbcDirective {
    readonly hostElement = inject(ElementRef);

    constructor() {
        console.log(this.hostElement);
    }
}