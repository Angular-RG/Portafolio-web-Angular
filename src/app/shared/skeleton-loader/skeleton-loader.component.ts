import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonLoaderComponent {
  @Input() type: 'card' | 'text' | 'circle' | 'rectangle' = 'rectangle';
  @Input() width: string = '100%';
  @Input() height: string = '20px';
  @Input() count: number = 1;
  @Input() animated: boolean = true;

  get skeletonClass(): string {
    return `skeleton skeleton-${this.type} ${this.animated ? 'skeleton-animated' : ''}`;
  }

  get skeletonStyle(): { [key: string]: string } {
    return {
      width: this.width,
      height: this.height
    };
  }

  getArray(count: number): number[] {
    return Array(count).fill(0).map((_, i) => i);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
