import { z } from "zod";
import { ResultPattern } from "@/shared/domain/result-pattern";
import { bmiBodyMeasurementsSchema } from "./bmi-body-measurements";

export const bmiCalculationSchema = z.object({
  id: z.string({
    message: "ID is required",
  }),
  weight: bmiBodyMeasurementsSchema.shape.weight,
  height: bmiBodyMeasurementsSchema.shape.height,
  bmi: z.number({
    message: "BMI is required",
  }),
  category: z.enum(["Underweight", "Normal", "Overweight", "Obese"], {
    message: "Category is required",
  }),
  calculatedAt: z.date({
    message: "Calculation date is required",
  }),
});

export type BmiCalculation = z.infer<typeof bmiCalculationSchema>;

// Business Logic Functions
export const calculateBMI = (weight: number, height: number): number => {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return Math.round(bmi * 10) / 10; // Round to 1 decimal place
};

export const determineBMICategory = (
  bmi: number
): BmiCalculation["category"] => {
  if (bmi < 18.5) return "Underweight";
  if (bmi >= 18.5 && bmi <= 24.9) return "Normal";
  if (bmi >= 25 && bmi <= 29.9) return "Overweight";
  return "Obese";
};

// Ports
export type CreateBmiCalculationPort = (
  weight: number,
  height: number
) => Promise<ResultPattern<BmiCalculation, string>>;

export type GetAllBmiCalculationsPort = () => Promise<
  ResultPattern<BmiCalculation[], string>
>;
