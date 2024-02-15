import { Component, Input, OnInit } from '@angular/core';
import { IconSize } from 'src/app/constants/icon-size.constants';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {

  @Input() testimonialData : any = {
    feedback:'',
    feedbackBy:''
  };

  iconSize = IconSize.MD;

  constructor() { }

  ngOnInit(): void {
  }

}
