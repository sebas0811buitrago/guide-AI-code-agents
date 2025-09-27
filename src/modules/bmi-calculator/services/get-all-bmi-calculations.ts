// Adapter for retrieving all BMI calculations from localStorage

import {
  GetAllBmiCalculationsPort,
  BmiCalculation,
} from "../domain/bmi-calculation";
import { ResultPattern } from "@/shared/domain/result-pattern";
import { BmiCalculationStorageItem } from "./interfaces";
import { loadBmiCalculationsService } from "./local-storage";

// Transform storage item to domain entity
const transformToDomainEntity = (
  storageItem: BmiCalculationStorageItem
): BmiCalculation => ({
  id: storageItem.id,
  weight: storageItem.weight,
  height: storageItem.height,
  bmi: storageItem.bmi,
  category: storageItem.category,
  calculatedAt: new Date(storageItem.calculatedAt), // Convert ISO string back to Date
});

export const getAllBmiCalculations: GetAllBmiCalculationsPort =
  async (): Promise<ResultPattern<BmiCalculation[], string>> => {
    try {
      // Load all calculations from localStorage
      const storageItems = loadBmiCalculationsService();

      // Transform storage items to domain entities
      const calculations = storageItems.map(transformToDomainEntity);

      // Sort by calculation date (newest first)
      const sortedCalculations = calculations.sort(
        (a, b) => b.calculatedAt.getTime() - a.calculatedAt.getTime()
      );

      return { success: true, data: sortedCalculations };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to retrieve BMI calculations",
      };
    }
  };
