import { Component, Input, OnInit, OnChanges } from '@angular/core';


@Component({
    selector: 'fs-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss']
})
export class FsBadgeComponent implements OnInit, OnChanges {

  @Input() public color;
  @Input() public text = '';
  @Input() public tooltip;
  @Input() public size;
  @Input() public shape = 'circle';
  @Input() public image;
  @Input() public icon;
  @Input() public iconSize;
  @Input() public iconColor;
  @Input() public backgroundSize;

  public styles: any = {};
  public type: string;
  public iconStyle: any = {};

  constructor() { }

  public ngOnInit() { }

  public ngOnChanges(changes) {

    this.type = this.image ? 'image' : 'text';
    this.styles = {};
    this.iconStyle = {};

    if (this.backgroundSize) {
      this.styles['background-size'] = this.backgroundSize;
    }

    if (this.iconSize) {
      this.iconStyle.transform = 'scale(' + this.iconSize + ')';
    }

    if (this.iconColor) {
      this.iconStyle.color = this.iconColor;
    }

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
