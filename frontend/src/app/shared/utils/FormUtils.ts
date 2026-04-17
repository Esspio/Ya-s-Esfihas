import { WritableSignal } from '@angular/core';

export class FormUtils {
  static updateField<T, K extends keyof T>(formSignal: WritableSignal<T>, field: K, value: T[K]) {
    formSignal.update((f) => ({
      ...f,
      [field]: value,
    }));

    console.log(formSignal());
  }
}
