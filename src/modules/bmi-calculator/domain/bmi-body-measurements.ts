import { z } from "zod";

export const bmiBodyMeasurementsSchema = z.object({
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
});

export type BmiBodyMeasurements = z.infer<typeof bmiBodyMeasurementsSchema>;
