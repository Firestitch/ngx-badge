import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsBadgeModule } from '@firestitch/badge';
import { FsExampleModule } from '@firestitch/example';
import { FsLabelModule } from '@firestitch/label';

import { AppMaterialModule } from './material.module';
import { ImageExampleComponent } from './components/image-example/image-example.component';
import { IconExampleComponent } from './components/icon-example/icon-example.component';
import { TextExampleComponent } from './components/text-example/text-example.component';


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FsBadgeModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        FsExampleModule.forRoot(),
        FsLabelModule
    ],
    declarations: [
        AppComponent,
        ImageExampleComponent,
        IconExampleComponent,
        TextExampleComponent
    ],
    providers: []
})
export class PlaygroundModule {
}
