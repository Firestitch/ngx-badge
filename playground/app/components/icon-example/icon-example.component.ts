import { Component } from '@angular/core';
import { FsBadgeComponent } from '../../../../src/app/components/badge/badge.component';

@Component({
    selector: 'icon-example',
    templateUrl: 'icon-example.component.html',
    standalone: true,
    imports: [FsBadgeComponent]
})
export class IconExampleComponent {
}
