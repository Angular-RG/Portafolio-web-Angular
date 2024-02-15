import { Component, OnInit } from '@angular/core';
import { IconSize } from 'src/app/constants/icon-size.constants';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  colors = HeadingColors.DEFAULT_GRADIENT
  sizeMD = IconSize.MD;
  sizeXL = IconSize.XL;

  constructor() { }

  ngOnInit(): void {
  }

}
