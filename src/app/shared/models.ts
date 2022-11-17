export interface IUser {
  uid: string;
  displayName: string;
  city?: string;
  country?: string;
  age?: number;
  experience?: string;
  sex?: string;
  stravaLink?: string;
}

export interface IConfirmDialog {
  title: string;
  message?: string;
  cancelButton: string;
  submitButton: string;
}

export interface IFooterLinks {
  title: string;
  icon: string;
  url: string;
  customClass?: string;
}
