import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: '[fsBadge]',
    templateUrl: './fsbadge.component.html',
    styleUrls: ['./fsbadge.component.scss']
})
export class FsBadgeComponent implements OnInit, OnChanges {

  @Input('fsBadgeColor') color;
  @Input('fsBadgeLabel') label;
  @Input('fsBadgeTooltip') tooltip;
  @Input('fsBadgeSize') size;
  @Input('fsBadgeShape') shape;
  @Input('fsBadgeImage') image;
  @Input('fsBadgeClass') class; 
  @Input('fsBadgeIcon') icon;
  @Input('fsBadgeIconSize') iconSize;
  @Input('fsBadgeIconColor') iconColor;

  styles = {};
  type: string;
  iconStyle = {};

  constructor() { }

  ngOnInit() {
    this.type = this.image ? 'image' : 'text';

    this.iconStyle = {};
    if (this.iconSize) {
      this.iconStyle['transform'] = 'scale(' + this.iconSize + ')';
    }

    if (this.iconColor) {
      this.iconStyle['color'] = this.iconColor;
    }
  }

  ngOnChanges(changes) {
    this.styles = {};

    if (this.color) {
        this.styles['background-color'] = this.color;
    }

    if (this.size) {
        this.styles['width'] = this.size + 'px';
        this.styles['min-width'] = this.size + 'px';

        if (this.shape === 'circle') {
            this.styles['height'] = this.size + 'px';
            this.styles['line-height'] = this.size + 'px';
        }
    }

    if (this.image) {
        this.styles['background-image'] = 'url(' + this.image + ')';
    }
  }

}
