import { Directive, ElementRef, Output, EventEmitter, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  @Input() threshold: number = 0.1;
  @Input() rootMargin: string = '0px';
  @Input() triggerOnce: boolean = true;
  
  @Output() inView = new EventEmitter<boolean>();
  @Output() intersectionEntry = new EventEmitter<IntersectionObserverEntry>();

  private observer?: IntersectionObserver;
  private hasTriggered = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.createObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private createObserver(): void {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const isIntersecting = entry.isIntersecting;
            
            if (isIntersecting && this.triggerOnce && this.hasTriggered) {
              return;
            }

            if (isIntersecting && this.triggerOnce) {
              this.hasTriggered = true;
            }

            this.inView.emit(isIntersecting);
            this.intersectionEntry.emit(entry);
          });
        },
        {
          threshold: this.threshold,
          rootMargin: this.rootMargin
        }
      );

      this.observer.observe(this.el.nativeElement);
    }
  }
}
