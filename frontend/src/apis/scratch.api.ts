import { apiInstance } from './base.api';

export async function saveTextToScratchPad(text: string) {
  return apiInstance.put('scratch', {
    text,
  });
}

export async function getTextToScratchPad() {
  return apiInstance.get('scratch');
}
