import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { staggerFade } from 'src/app/animations/animations';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';

@Component({
  selector: 'app-recommendation-section',
  templateUrl: './recommendation-section.component.html',
  styleUrls: ['./recommendation-section.component.scss'],
  animations: [
    staggerFade
  ]
})
export class RecommendationSectionComponent implements OnInit {

  inView : boolean = false;
  @ViewChild('recommSec') recommSec: ElementRef | undefined;
  colors = HeadingColors.DEFAULT_GRADIENT

  testimonialDataList: Array<object> = [
    {
      feedback: '"Apasionado desarrollador de software con experiencia en diversos lenguajes y tecnologías. Comprometido con la calidad del código y la resolución eficiente de problemas. Profesional altamente enfocado en la mejora continua, trabajando de forma colaborativa para alcanzar resultados sobresalientes."',
      feedbackBy: 'Luis Angel Flores Galindo (Angular Developer)'
    },
    {
      feedback: '"Héctor es un desarrollador excepcional con gran capacidad de análisis y resolución de problemas complejos. Su experiencia en sistemas gubernamentales y su dominio del stack Java-Angular lo convierten en un activo valioso para cualquier equipo."',
      feedbackBy: 'María González (Project Manager - CETIC)'
    },
    {
      feedback: '"Trabajar con Héctor ha sido una experiencia excelente. Su conocimiento técnico en Spring Boot y Angular, combinado con su capacidad para entregar proyectos en tiempo y forma, lo destacan como un desarrollador senior confiable."',
      feedbackBy: 'Carlos Rodríguez (Tech Lead)'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  trackByFeedbackBy(index: number, testimonial: any) {
    return testimonial.feedbackBy;
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.recommSec && this.recommSec.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
    }
  }


}
