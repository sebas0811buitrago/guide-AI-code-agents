// localStorage response and request interfaces for BMI calculations

export interface BmiCalculationCollection {
  version: number;
  calculations: BmiCalculationStorageItem[];
}

export interface BmiCalculationStorageItem {
  id: string;
  weight: number;
  height: number;
  bmi: number;
  category: "Underweight" | "Normal" | "Overweight" | "Obese";
  calculatedAt: string; // ISO string format for Date serialization
}

export interface CreateBmiCalculationRequest {
  weight: number;
  height: number;
}

export interface LocalStorageService {
  save: (key: string, data: BmiCalculationCollection) => void;
  load: (key: string) => BmiCalculationCollection | null;
}
