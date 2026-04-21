import { MESSAGES } from './Messages_json';

export const TOAST_OPTIONS_VALUES = {
  SUCCESS: { severity: 'success', title: MESSAGES['sucesso'] },
  INFORMATIVE: { severity: 'info', title: MESSAGES['informativo'] },
  WARNING: { severity: 'warn', title: MESSAGES['aviso'] },
  ERROR: { severity: 'error', title: MESSAGES['ocorreu.um.erro'] },
} as const;

export type ToastOptionType = (typeof TOAST_OPTIONS_VALUES)[keyof typeof TOAST_OPTIONS_VALUES];
