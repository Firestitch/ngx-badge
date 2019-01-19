import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatTooltipModule } from '@angular/material';

import { FsBadgeComponent } from './components/badge/badge.component';

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
export class FsBadgeModule {}
