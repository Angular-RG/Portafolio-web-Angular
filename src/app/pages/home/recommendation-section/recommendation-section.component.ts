import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { staggerFade } from 'src/app/animations/animations';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';
import { TranslateService } from '@ngx-translate/core';

interface Testimonial {
  id: number;
  carrer?: string;
  nameKey: string;
  positionKey: string;
  companyKey: string;
  contentKey: string;
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
      carrer: 'I.S.C.',
      nameKey: 'TESTIMONIALS.T1.NAME',
      positionKey: 'TESTIMONIALS.T1.POSITION',
      companyKey: 'TESTIMONIALS.T1.COMPANY',
      contentKey: 'TESTIMONIALS.T1.CONTENT',
      image: 'assets/images/testimonial-1.jpg',
      rating: 5,
      featured: true,
      date: new Date('2024-03-15'),
      linkedInUrl: '#'
    },
    {
      id: 2,
      carrer: 'M.E.A.',
      nameKey: 'TESTIMONIALS.T2.NAME',
      positionKey: 'TESTIMONIALS.T2.POSITION',
      companyKey: 'TESTIMONIALS.T2.COMPANY',
      contentKey: 'TESTIMONIALS.T2.CONTENT',
      image: 'assets/images/testimonial-2.jpg',
      rating: 5,
      featured: true,
      date: new Date('2024-02-20'),
      linkedInUrl: '#'
    },
    {
      id: 3,
      nameKey: 'TESTIMONIALS.T3.NAME',
      positionKey: 'TESTIMONIALS.T3.POSITION',
      companyKey: 'TESTIMONIALS.T3.COMPANY',
      contentKey: 'TESTIMONIALS.T3.CONTENT',
      image: 'assets/images/testimonial-3.jpg',
      rating: 5,
      featured: false,
      date: new Date('2024-01-10'),
      linkedInUrl: '#'
    },
    {
      id: 4,
      nameKey: 'TESTIMONIALS.T4.NAME',
      positionKey: 'TESTIMONIALS.T4.POSITION',
      companyKey: 'TESTIMONIALS.T4.COMPANY',
      contentKey: 'TESTIMONIALS.T4.CONTENT',
      image: 'assets/images/testimonial-4.jpg',
      rating: 5,
      featured: true,
      date: new Date('2023-12-05'),
      linkedInUrl: '#'
    },
    {
      id: 5,
      nameKey: 'TESTIMONIALS.T5.NAME',
      positionKey: 'TESTIMONIALS.T5.POSITION',
      companyKey: 'TESTIMONIALS.T5.COMPANY',
      contentKey: 'TESTIMONIALS.T5.CONTENT',
      image: 'assets/images/testimonial-5.jpg',
      rating: 5,
      featured: false,
      date: new Date('2023-11-10'),
      linkedInUrl: '#'
    },
    {
      id: 6,
      nameKey: 'TESTIMONIALS.T6.NAME',
      positionKey: 'TESTIMONIALS.T6.POSITION',
      companyKey: 'TESTIMONIALS.T6.COMPANY',
      contentKey: 'TESTIMONIALS.T6.CONTENT',
      image: 'assets/images/testimonial-6.jpg',
      rating: 5,
      featured: false,
      date: new Date('2023-10-15'),
      linkedInUrl: '#'
    },
    {
      id: 7,
      nameKey: 'TESTIMONIALS.T7.NAME',
      positionKey: 'TESTIMONIALS.T7.POSITION',
      companyKey: 'TESTIMONIALS.T7.COMPANY',
      contentKey: 'TESTIMONIALS.T7.CONTENT',
      image: 'assets/images/testimonial-7.jpg',
      rating: 5,
      featured: false,
      date: new Date('2023-09-20'),
      linkedInUrl: '#'
    },
    {
      id: 8,
      nameKey: 'TESTIMONIALS.T8.NAME',
      positionKey: 'TESTIMONIALS.T8.POSITION',
      companyKey: 'TESTIMONIALS.T8.COMPANY',
      contentKey: 'TESTIMONIALS.T8.CONTENT',
      image: 'assets/images/testimonial-8.jpg',
      rating: 5,
      featured: true,
      date: new Date('2023-08-05'),
      linkedInUrl: '#'
    }
  ];

  // Filtros
  showFeaturedOnly = false;
  showAllTestimonials = false;

  get filteredTestimonials(): Testimonial[] {
    let list = this.showFeaturedOnly ? this.testimonials.filter(t => t.featured) : this.testimonials;
    if (!this.showAllTestimonials) {
      return list.slice(0, 6);
    }
    return list;
  }

  get hasMoreTestimonials(): boolean {
    const list = this.showFeaturedOnly ? this.testimonials.filter(t => t.featured) : this.testimonials;
    return list.length > 6;
  }

  toggleFeatured(): void {
    this.showFeaturedOnly = !this.showFeaturedOnly;
  }

  showMoreTestimonials(): void {
    this.showAllTestimonials = true;
  }

  showLessTestimonials(): void {
    this.showAllTestimonials = false;
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

  constructor(private translate: TranslateService) { }

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
