import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ErrorHandlerService, AppError } from '../services/error-handler.service';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastNotificationComponent implements OnInit, OnDestroy {
  errors$: Observable<AppError[]>;
  private destroy$ = new Subject<void>();

  constructor(
    private errorHandler: ErrorHandlerService,
    private cdr: ChangeDetectorRef
  ) {
    this.errors$ = this.errorHandler.errors$;
  }

  ngOnInit(): void {
    this.errors$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  removeError(errorId: string): void {
    this.errorHandler.removeError(errorId);
  }

  getErrorIcon(type: string): string {
    switch (type) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'info': return 'ℹ';
      case 'error': return '✕';
      default: return 'ℹ';
    }
  }

  getErrorClass(type: string): string {
    const baseClass = 'toast-notification';
    switch (type) {
      case 'success': return `${baseClass} ${baseClass}--success`;
      case 'warning': return `${baseClass} ${baseClass}--warning`;
      case 'info': return `${baseClass} ${baseClass}--info`;
      case 'error': return `${baseClass} ${baseClass}--error`;
      default: return baseClass;
    }
  }

  trackByError(index: number, error: AppError): string {
    return error.id;
  }
}
