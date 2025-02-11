import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'fs-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsBadgeComponent implements OnChanges {

  @Input() public color;
  @Input() public text: string | number = '';
  @Input() public tooltip;
  @Input() public size: number;
  @Input() public shape: 'circle' | 'square' = 'circle';
  @Input() public image;
  @Input() public icon;
  @Input() public iconSize;
  @Input() public iconSizePercent = .7;
  @Input() public iconColor: string;
  @Input() public backgroundSize: string;

  public styles: { [key: string]: string } = {};
  public iconStyle: { [key: string]: string } = {};
  public type: string;

  public ngOnChanges(changes) {    
    this.styles = {};
    this.iconStyle = {};

    if(this.image) {
      this.type = 'image';
      this._initImage();
    } else if(this.icon) {
      this.type = 'icon';
      this._initIcon();
    } else {
      this.type = 'text';
    }

    if (this.backgroundSize) {
      this.styles['background-size'] = this.backgroundSize;
    }

    if (this.color) {
      this.styles['background-color'] = this.color;
    }

    if (this.size) {
      this.styles.width = `${this.size}px`;
      this.styles['min-width'] = `${this.size}px`;

      if (this.shape === 'circle' || this.shape === 'square') {
        this.styles.height = `${this.size}px`;
        this.styles['line-height'] = `${this.size}px`;
      }

      if (this.text) {
        this.styles['font-size'] = `${this.size / 2.5}px`;
      }
    }
  }

  private _initImage(): void {
    this.styles['background-image'] = `url(${this.image})`;
  }

  private _initIcon(): void {
    if(!this.iconSize && this.iconSizePercent) {
      const diff = this.size * this.iconSizePercent;
      this.iconSize =  diff / 24;
    }

    if (this.iconSize) {
      this.iconStyle.transform = `scale(${  this.iconSize  })`;
    }

    if (this.iconColor) {
      this.iconStyle.color = this.iconColor;
    }
  }

}
