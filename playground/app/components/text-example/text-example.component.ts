import { Component } from '@angular/core';
import { FsBadgeComponent } from '../../../../src/app/components/badge/badge.component';


@Component({
    selector: 'text-example',
    templateUrl: 'text-example.component.html',
    standalone: true,
    imports: [FsBadgeComponent]
})
export class TextExampleComponent {
}
