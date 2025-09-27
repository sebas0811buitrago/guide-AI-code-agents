// Export all BMI calculation service adapters

export { createBmiCalculation } from "./create-bmi-calculation";
export { getAllBmiCalculations } from "./get-all-bmi-calculations";
export type {
  BmiCalculationCollection,
  BmiCalculationStorageItem,
  CreateBmiCalculationRequest,
  LocalStorageService,
} from "./interfaces";
