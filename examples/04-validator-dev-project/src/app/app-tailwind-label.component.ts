import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormComponent } from '@INTERNAL_formql/core';

@Component({
    selector: 'app-tailwind-label',
    template: `<p>{{field.label}}</p>`,
})
export class AppTailwindLabelComponent {
    static componentName = 'AppTailwindLabelComponent';
    static formQLComponent = true;
    static validators = [];

    @Input() field: FormComponent<any>;
    @Input() formControl: FormControl;
}
