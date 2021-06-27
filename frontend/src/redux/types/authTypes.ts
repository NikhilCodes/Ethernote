export enum AuthType {
  AUTHENTICATED,
  UNAUTHENTICATED,
}

export enum AuthActionType {
  AUTHENTICATE='auth.authenticate',
  LOGOUT='auth.logout',
}

interface AuthUser {
  id: string;
  email: string;
  fullName: string;
}

export interface AuthStateType {
  status: AuthType;
  user: Partial<AuthUser>;
  isLoading: boolean;
}
