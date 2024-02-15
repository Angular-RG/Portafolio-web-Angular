import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { addClassToObject } from "../../util/config.util";
import { IconSize, IconSizeClasses } from "../../constants/icon-size.constants";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnChanges {
  /** INPUT FROM PARENT COMPONENT */
  @Input() iconSize: IconSize = IconSize.MD;
  @Input() iconType: string = 'default';

  /** LOCAL STATE OBJECTS */
  iconStyleState: object = {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['iconSize']) {
      const sizeKey = IconSize[this.iconSize];
      const sizeClass = IconSizeClasses[sizeKey];
      if (sizeClass) {
        addClassToObject(this.iconStyleState, [sizeClass]);
      }
    }
  }

}
