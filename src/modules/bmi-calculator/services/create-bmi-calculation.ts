// Adapter for creating and saving new BMI calculations to localStorage

import {
  CreateBmiCalculationPort,
  BmiCalculation,
} from "../domain/bmi-calculation";
import { ResultPattern } from "@/shared/domain/result-pattern";
import { BmiCalculationStorageItem } from "./interfaces";
import { addBmiCalculationService } from "./local-storage";
// Transform domain entity to storage format
const transformToStorageItem = (
  calculation: BmiCalculation
): BmiCalculationStorageItem => ({
  id: calculation.id,
  weight: calculation.weight,
  height: calculation.height,
  bmi: calculation.bmi,
  category: calculation.category,
  calculatedAt: calculation.calculatedAt.toISOString(), // Convert Date to ISO string
});

export const createBmiCalculation: CreateBmiCalculationPort = async (
  weight: number,
  height: number,
  bmi: number,
  category: BmiCalculation["category"]
): Promise<ResultPattern<BmiCalculation, string>> => {
  try {
    // Create BMI calculation with provided values
    const bmiCalculation: BmiCalculation = {
      id: crypto.randomUUID(),
      weight,
      height,
      bmi,
      category,
      calculatedAt: new Date(),
    };

    // Transform to storage format and save
    const storageItem = transformToStorageItem(bmiCalculation);
    addBmiCalculationService(storageItem);

    return { success: true, data: bmiCalculation };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to create BMI calculation",
    };
  }
};
