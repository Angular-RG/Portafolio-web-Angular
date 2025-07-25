import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IconSize } from 'src/app/constants/icon-size.constants';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { CvDownloadService } from 'src/app/shared/services/cv-download.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSectionComponent implements OnInit {

  colors = HeadingColors.DEFAULT_GRADIENT
  sizeMD = IconSize.MD;
  sizeXL = IconSize.XL;

  contactForm!: FormGroup;
  showContactForm = false;
  formSubmitted = false;
  formSuccess = false;

  isLoading$: Observable<boolean>;
  cvFormats: string[] = [];

  constructor(
    private fb: FormBuilder,
    private loadingService: LoadingService,
    private cvDownloadService: CvDownloadService,
    private cdr: ChangeDetectorRef,
    private errorHandler: ErrorHandlerService
  ) { 
    this.isLoading$ = this.loadingService.isLoading$;
    this.cvFormats = this.cvDownloadService.getCVFormats();
    this.initializeForm();
  }

  ngOnInit(): void {
  }

  private initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  toggleContactForm(): void {
    this.showContactForm = !this.showContactForm;
    this.cdr.markForCheck();
  }

  async onSubmitContactForm(): Promise<void> {
    if (this.contactForm.valid) {
      this.formSubmitted = true;
      
      try {
        // Simulate form submission
        await this.loadingService.withLoading(async () => {
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          // In a real application, you would send the form data to a backend service
          console.log('Form Data:', this.contactForm.value);
          
          this.formSuccess = true;
          this.contactForm.reset();
          this.cdr.markForCheck();
          
          // Show success notification
          this.errorHandler.showSuccess('Message sent successfully! I\'ll get back to you soon.');
          
          // Hide form after 3 seconds
          setTimeout(() => {
            this.formSuccess = false;
            this.showContactForm = false;
            this.cdr.markForCheck();
          }, 3000);
        }, 'contact-form');
      } catch (error) {
        console.error('Error submitting form:', error);
        this.errorHandler.addError({
          id: `contact_error_${Date.now()}`,
          message: 'Failed to send message. Please try again or contact me directly.',
          type: 'error',
          timestamp: new Date(),
          details: error
        });
      }
    } else {
      this.markFormGroupTouched();
      this.errorHandler.showWarning('Please fill in all required fields correctly.');
    }
  }

  async downloadCV(format: 'pdf' | 'doc' = 'pdf'): Promise<void> {
    try {
      await this.loadingService.withLoading(async () => {
        await this.cvDownloadService.downloadCV(format).toPromise();
        this.errorHandler.showSuccess(`CV downloaded successfully as ${format.toUpperCase()}!`);
      }, 'cv-download');
    } catch (error) {
      console.error('Error downloading CV:', error);
      this.errorHandler.addError({
        id: `cv_error_${Date.now()}`,
        message: 'Failed to download CV. Please try again later.',
        type: 'error',
        timestamp: new Date(),
        details: error
      });
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsTouched();
    });
    this.cdr.markForCheck();
  }

  isFieldTouched(fieldName: string): boolean {
    return this.contactForm.get(fieldName)?.touched || false;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} is too short`;
    }
    return '';
  }

  trackByIndex(index: number): number {
    return index;
  }

}
