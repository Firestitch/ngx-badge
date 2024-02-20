import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    declarations: [
        FsBadgeComponent,
    ],
    providers: []
})
export class FsBadgeModule {}
