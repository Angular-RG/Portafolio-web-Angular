import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective implements OnInit, OnDestroy {
  @Input() scrollTarget: string = '';
  @Input() scrollOffset: number = 0;
  @Input() scrollDuration: number = 1000;
  @Output() scrollComplete = new EventEmitter<void>();

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // Add smooth scrolling behavior to the element
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    
    if (this.scrollTarget) {
      this.scrollToTarget();
    }
  }

  private scrollToTarget(): void {
    const targetElement = document.querySelector(this.scrollTarget);
    
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - this.scrollOffset;
      
      this.smoothScrollTo(targetPosition);
    }
  }

  private smoothScrollTo(targetPosition: number): void {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / this.scrollDuration, 1);
      
      // Easing function (ease-in-out-cubic)
      const easeInOutCubic = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const currentPosition = startPosition + (distance * easeInOutCubic);
      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        this.scrollComplete.emit();
      }
    };

    requestAnimationFrame(animateScroll);
  }

  private setupIntersectionObserver(): void {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.renderer.addClass(this.el.nativeElement, 'in-view');
            } else {
              this.renderer.removeClass(this.el.nativeElement, 'in-view');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      this.observer.observe(this.el.nativeElement);
    }
  }
}
