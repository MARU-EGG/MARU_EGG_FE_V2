export type admissionType = undefined | 'SUSI' | 'PYEONIP' | 'JEONGSI';

export interface responseDetailAdmissionType {
  id: number;
  name: string;
  admissiontype: admissionType;
}

export interface isActiveAdmissionType {
  admissionType: admissionType;
  isActivated: boolean;
}
