import { Component, Input, OnInit, OnChanges } from '@angular/core';


@Component({
    selector: 'fs-badge',
    templateUrl: './fs-badge.component.html',
    styleUrls: ['./fs-badge.component.scss']
})
export class FsBadgeComponent implements OnInit, OnChanges {

  @Input('color') color;
  @Input() text = '';
  @Input('tooltip') tooltip;
  @Input('size') size;
  @Input('shape') shape = 'circle';
  @Input('image') image;
  @Input('icon') icon;
  @Input('iconSize') iconSize;
  @Input('iconColor') iconColor;

  styles: any = {};
  type: string;
  iconStyle: any = {};

  constructor() { }

  ngOnInit() {
    this.type = this.image ? 'image' : 'text';

    this.iconStyle = {};
    if (this.iconSize) {
      this.iconStyle.transform = 'scale(' + this.iconSize + ')';
    }

    if (this.iconColor) {
      this.iconStyle.color = this.iconColor;
    }
  }

  ngOnChanges(changes) {
    this.styles = {};

    if (this.color) {
        this.styles['background-color'] = this.color;
    }

    if (this.size) {
        this.styles.width = this.size + 'px';
        this.styles['min-width'] = this.size + 'px';

        if (this.shape === 'circle') {
            this.styles.height = this.size + 'px';
            this.styles['line-height'] = this.size + 'px';
        }

        if (this.text) {
          this.styles['font-size'] = (this.size / 2.5) + 'px';
        }
    }

    if (this.image) {
        this.styles['background-image'] = 'url(' + this.image + ')';
    }
  }

}
