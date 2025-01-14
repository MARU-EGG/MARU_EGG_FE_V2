import { admissionType } from '@/types/admission-type';
import { questionCategory } from '@/types/question-category';

export interface defaultPostQuestion {
  admissionType: admissionType;
  questionCategory: questionCategory;
  content: string;
}

export interface requestAutoComplete extends defaultPostQuestion {
  size: number;
  cursorViewCount: number;
  questionId: number;
}

export interface responseAutoComplete {
  content: string;
  id: number;
  isChecked: boolean;
}
