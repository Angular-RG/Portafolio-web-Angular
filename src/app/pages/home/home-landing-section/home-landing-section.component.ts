import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fade, slideInFromRightAndFade } from 'src/app/animations/animations';
import { FontSize } from 'src/app/constants/font-size.constants';
import { IconSize } from 'src/app/constants/icon-size.constants';
import { CustomButtonColors } from 'src/app/shared/custom-button/custom-button-color.model';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';

@Component({
  selector: 'app-home-landing-section',
  templateUrl: './home-landing-section.component.html',
  styleUrls: ['./home-landing-section.component.scss'],
  animations:[
    slideInFromRightAndFade,fade
  ]
})
export class HomeLandingSectionComponent implements OnInit {


  @Output() scrollToDevProcess = new EventEmitter<any>();
  colors = HeadingColors.DEFAULT_GRADIENT;
  color = CustomButtonColors.INDIGO600
  iconSize: IconSize = IconSize.MD;
  size: FontSize = FontSize.LG;

  constructor() { }

  ngOnInit(): void {
  }

  goToDevProcess(event: any): void {
    this.scrollToDevProcess.emit();
  }

}
