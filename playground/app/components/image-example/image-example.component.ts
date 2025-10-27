import { Component } from '@angular/core';
import { FsLabelModule } from '@firestitch/label';
import { FsBadgeComponent } from '../../../../src/app/components/badge/badge.component';

@Component({
    selector: 'image-example',
    templateUrl: 'image-example.component.html',
    standalone: true,
    imports: [FsLabelModule, FsBadgeComponent]
})
export class ImageExampleComponent {
  public image = 'https://www.adorama.com/alc/wp-content/uploads/2018/02/shutterstock_591809333-825x465.jpg';
}
