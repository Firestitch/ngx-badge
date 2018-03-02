import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatTooltipModule } from '@angular/material';

import { FsBadgeComponent } from './components/fs-badge/fs-badge.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    FsBadgeComponent,
  ],
  entryComponents: [
  ],
  declarations: [
    FsBadgeComponent,
  ],
  providers: [

  ],
})
export class FsComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsComponentModule,
      providers: []
    };
  }
}
