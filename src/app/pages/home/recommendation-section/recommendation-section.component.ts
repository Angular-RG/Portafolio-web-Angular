import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { staggerFade } from 'src/app/animations/animations';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  rating: number;
  featured: boolean;
  date: Date;
  linkedInUrl?: string;
}

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

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Luis Angel Flores Galindo',
      position: 'Angular Developer',
      company: 'CETIC - Gobierno de Durango',
      content: 'Apasionado desarrollador de software con experiencia en diversos lenguajes y tecnologías. Comprometido con la calidad del código y la resolución eficiente de problemas. Profesional altamente enfocado en la mejora continua, trabajando de forma colaborativa para alcanzar resultados sobresalientes.',
      image: 'assets/images/testimonial-1.jpg',
      rating: 5,
      featured: true,
      date: new Date('2024-03-15'),
      linkedInUrl: '#'
    },
    {
      id: 2,
      name: 'María González',
      position: 'Project Manager',
      company: 'CETIC - Gobierno de Durango',
      content: 'Héctor es un desarrollador excepcional con gran capacidad de análisis y resolución de problemas complejos. Su experiencia en sistemas gubernamentales y su dominio del stack Java-Angular lo convierten en un activo valioso para cualquier equipo.',
      image: 'assets/images/testimonial-2.jpg',
      rating: 5,
      featured: false,
      date: new Date('2024-02-20'),
      linkedInUrl: '#'
    },
    {
      id: 3,
      name: 'Carlos Rodríguez',
      position: 'Tech Lead',
      company: 'Freelance Projects',
      content: 'Trabajar con Héctor ha sido una experiencia excelente. Su conocimiento técnico en Spring Boot y Angular, combinado con su capacidad para entregar proyectos en tiempo y forma, lo destacan como un desarrollador senior confiable.',
      image: 'assets/images/testimonial-3.jpg',
      rating: 5,
      featured: true,
      date: new Date('2024-01-10'),
      linkedInUrl: '#'
    },
    {
      id: 4,
      name: 'Ana Martínez',
      position: 'Systems Architect',
      company: 'Municipio de Durango',
      content: 'La arquitectura de microservicios implementada por Héctor en nuestros sistemas municipales ha mejorado significativamente el rendimiento y la escalabilidad. Su visión técnica y capacidad de liderazgo son excepcionales.',
      image: 'assets/images/testimonial-4.jpg',
      rating: 5,
      featured: false,
      date: new Date('2023-12-05'),
      linkedInUrl: '#'
    }
  ];

  // Filtros
  showFeaturedOnly = false;

  get filteredTestimonials(): Testimonial[] {
    if (this.showFeaturedOnly) {
      return this.testimonials.filter(t => t.featured);
    }
    return this.testimonials;
  }

  toggleFeatured(): void {
    this.showFeaturedOnly = !this.showFeaturedOnly;
  }

  trackByTestimonial(index: number, testimonial: Testimonial): number {
    return testimonial.id;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }

  getSecondInitial(name: string): string {
    const parts = name.split(' ');
    if (parts.length > 1) {
      return parts[1].charAt(0);
    }
    return '';
  }

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.recommSec && this.recommSec.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
    }
  }


}
