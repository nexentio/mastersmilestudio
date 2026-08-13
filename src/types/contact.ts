export interface ContactFormData {
  firstName: string;
  lastName: string;
  treatment: string;
  email: string;
  phone: string;
  message: string;
  agreePrivacy: boolean;
}

export interface QuickConsultationFormData {
  fullName: string;
  phone: string;
  treatment: string;
  language: string;
}
