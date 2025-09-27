import { BmiCalculation } from "../../domain/bmi-calculation";
import { BmiBodyMeasurements } from "../../domain/bmi-body-measurements";
import { ResultPattern } from "@/shared/domain/result-pattern";

// Test data for BMI calculations
export const BMI_CALCULATION_UNDERWEIGHT_MOCK: BmiCalculation = {
  id: "calc-1",
  weight: 45,
  height: 170,
  bmi: 15.6,
  category: "Underweight",
  calculatedAt: new Date("2024-01-01T10:00:00Z"),
};

export const BMI_CALCULATION_NORMAL_MOCK: BmiCalculation = {
  id: "calc-2",
  weight: 70,
  height: 175,
  bmi: 22.9,
  category: "Normal",
  calculatedAt: new Date("2024-01-02T10:00:00Z"),
};

export const BMI_CALCULATION_OVERWEIGHT_MOCK: BmiCalculation = {
  id: "calc-3",
  weight: 85,
  height: 175,
  bmi: 27.8,
  category: "Overweight",
  calculatedAt: new Date("2024-01-03T10:00:00Z"),
};

export const BMI_CALCULATION_OBESE_MOCK: BmiCalculation = {
  id: "calc-4",
  weight: 100,
  height: 175,
  bmi: 32.7,
  category: "Obese",
  calculatedAt: new Date("2024-01-04T10:00:00Z"),
};

export const BMI_CALCULATIONS_LIST_MOCK: BmiCalculation[] = [
  BMI_CALCULATION_OBESE_MOCK,
  BMI_CALCULATION_OVERWEIGHT_MOCK,
  BMI_CALCULATION_NORMAL_MOCK,
  BMI_CALCULATION_UNDERWEIGHT_MOCK,
];

// Success result patterns
export const BMI_CALCULATION_SUCCESS_RESULT = (
  calculation: BmiCalculation
): ResultPattern<BmiCalculation, string> => ({
  success: true,
  data: calculation,
});

export const BMI_CALCULATIONS_LIST_SUCCESS_RESULT: ResultPattern<
  BmiCalculation[],
  string
> = {
  success: true,
  data: BMI_CALCULATIONS_LIST_MOCK,
};

// Error result patterns
export const BMI_CALCULATION_ERROR_RESULT: ResultPattern<
  BmiCalculation,
  string
> = {
  success: false,
  error: "Failed to create BMI calculation",
};

export const BMI_CALCULATIONS_LIST_ERROR_RESULT: ResultPattern<
  BmiCalculation[],
  string
> = {
  success: false,
  error: "Failed to retrieve BMI calculations",
};

// Form input values for testing
export const VALID_FORM_INPUT_NORMAL: BmiBodyMeasurements = {
  weight: 70,
  height: 175,
};

export const VALID_FORM_INPUT_UNDERWEIGHT: BmiBodyMeasurements = {
  weight: 45,
  height: 170,
};

export const VALID_FORM_INPUT_OVERWEIGHT: BmiBodyMeasurements = {
  weight: 85,
  height: 175,
};

export const VALID_FORM_INPUT_OBESE: BmiBodyMeasurements = {
  weight: 100,
  height: 175,
};

// Helper function to create new calculation result
export const createBmiCalculationResult = (
  weight: number,
  height: number
): BmiCalculation => {
  const bmi = Math.round((weight / Math.pow(height / 100, 2)) * 10) / 10;
  let category: BmiCalculation["category"];

  if (bmi < 18.5) category = "Underweight";
  else if (bmi <= 24.9) category = "Normal";
  else if (bmi <= 29.9) category = "Overweight";
  else category = "Obese";

  return {
    id: crypto.randomUUID(),
    weight,
    height,
    bmi,
    category,
    calculatedAt: new Date(),
  };
};
