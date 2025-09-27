// localStorage service for BMI calculations with proper serialization/deserialization

import {
  BmiCalculationCollection,
  BmiCalculationStorageItem,
  LocalStorageService,
} from "./interfaces";

const STORAGE_KEY = "bmi-calculations";
const CURRENT_VERSION = 1;

const localStorageService: LocalStorageService = {
  save: (key: string, data: BmiCalculationCollection): void => {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      throw new Error(
        `Failed to save data to localStorage: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  },

  load: (key: string): BmiCalculationCollection | null => {
    try {
      const serializedData = localStorage.getItem(key);

      if (!serializedData) {
        return null;
      }

      const data = JSON.parse(serializedData) as BmiCalculationCollection;

      // Data validation and versioning
      if (!data.version || !Array.isArray(data.calculations)) {
        throw new Error("Invalid data format in localStorage");
      }

      return data;
    } catch (error) {
      throw new Error(
        `Failed to load data from localStorage: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  },
};

// Utility functions for BMI calculation storage operations
export const saveBmiCalculationsService = (
  calculations: BmiCalculationStorageItem[]
): void => {
  const collection: BmiCalculationCollection = {
    version: CURRENT_VERSION,
    calculations,
  };

  localStorageService.save(STORAGE_KEY, collection);
};

export const loadBmiCalculationsService = (): BmiCalculationStorageItem[] => {
  const collection = localStorageService.load(STORAGE_KEY);

  if (!collection) {
    // Return empty array if no data exists
    return [];
  }

  return collection.calculations;
};

export const addBmiCalculationService = (
  calculation: BmiCalculationStorageItem
): BmiCalculationStorageItem[] => {
  const existingCalculations = loadBmiCalculationsService();
  const updatedCalculations = [...existingCalculations, calculation];

  saveBmiCalculationsService(updatedCalculations);

  return updatedCalculations;
};
