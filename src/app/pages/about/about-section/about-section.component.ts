import { Component, OnInit } from '@angular/core';
import { fade, slideInFromRightAndFade } from 'src/app/animations/animations';
import { FontSize } from 'src/app/constants/font-size.constants';
import { IconSize } from 'src/app/constants/icon-size.constants';
import { CustomButtonColors } from 'src/app/shared/custom-button/custom-button-color.model';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
  animations: [
    slideInFromRightAndFade, fade
  ]
})
export class AboutSectionComponent implements OnInit {

  colorsDefault = HeadingColors.DEFAULT_GRADIENT
  sizeMD = IconSize.MD;
  frontSizeLG = FontSize.LG;
  color = CustomButtonColors.INDIGO600

  constructor() { }

  ngOnInit(): void {
  }
  //Todo: Cambiar por mi CV
  openResume(event: any) {
    window.open("assets/files/Harsh_Bharvada.pdf", "_blank");
  }

}
