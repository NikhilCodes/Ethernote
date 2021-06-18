import { apiInstance } from './base.api';

export async function getSelfUser() {
  return (await (apiInstance.get('users'))).data;
}
