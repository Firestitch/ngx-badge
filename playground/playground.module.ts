import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsComponentModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import { FsExamplesComponent } from '../tools/components/examples/examples.component';
import { ImageExampleComponent } from './app/components/image-example/image-example.component';
import { IconExampleComponent } from './app/components/icon-example/icon-example.component';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsComponentModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    ImageExampleComponent,
    IconExampleComponent,
    FsExamplesComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
