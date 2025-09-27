import { z } from "zod";
import { ResultPattern } from "@/shared/domain/result-pattern";

export const bmiCalculationSchema = z.object({
  id: z.string({
    message: "ID is required",
  }),
  weight: z
    .number({
      message: "Weight is required",
    })
    .min(1, "Weight must be at least 1 kg")
    .max(1000, "Weight cannot exceed 1000 kg"),
  height: z
    .number({
      message: "Height is required",
    })
    .min(30, "Height must be at least 30 cm")
    .max(300, "Height cannot exceed 300 cm"),
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
