import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsBadgeComponent } from './fsbadge.component';
import { MatTooltipModule, MatIconModule } from '@angular/material';

export * from './fsbadge.component';

@NgModule({
imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule
],
declarations: [
    FsBadgeComponent
],
providers: [
],
exports: [
    FsBadgeComponent
]
})
export class FsBadgeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsBadgeModule,
      providers: []
    };
  }
}
