import { Component, Input, SimpleChanges } from '@angular/core';
import { addClassToObject } from 'src/app/util/config.util';
import { HeadingColorClasses, HeadingColors } from './heading-color.model';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {

  @Input() headingText: string = '';
  @Input() bgColor: HeadingColors = HeadingColors.DEFAULT;
  styleState: object = {};

  ngOnChanges(changes: SimpleChanges) {
    if (this.bgColor)
      addClassToObject(this.styleState, [HeadingColorClasses[this.bgColor]]);
  }
  
}
