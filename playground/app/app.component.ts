import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { ImageExampleComponent } from './components/image-example/image-example.component';
import { IconExampleComponent } from './components/icon-example/icon-example.component';
import { TextExampleComponent } from './components/text-example/text-example.component';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [FsExampleModule, ImageExampleComponent, IconExampleComponent, TextExampleComponent]
})
export class AppComponent {
  public config = environment;
}