import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastOptionType } from '../../../shared/utils/ToastUtils';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  showMessage(toastOption: ToastOptionType, message: string, lifetime?: number) {
    this.messageService.add({
      severity: toastOption.severity,
      summary: toastOption.title,
      detail: message,
      key: 'bl',
      life: lifetime ?? 3000,
    });
  }
}
