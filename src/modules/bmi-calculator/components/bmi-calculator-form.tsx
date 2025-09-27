"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import {
  bmiBodyMeasurementsSchema,
  type BmiBodyMeasurements,
} from "../domain/bmi-body-measurements";
import { createBmiCalculation } from "../services/create-bmi-calculation";
import { useState } from "react";
import { BmiCalculation } from "../domain/bmi-calculation";
import { useGetBmiCalculations } from "../hooks/use-get-bmi-calculations";

interface BmiCalculatorFormProps {
  onCalculationCreated?: () => void;
}

export const BmiCalculatorForm = ({
  onCalculationCreated,
}: BmiCalculatorFormProps) => {
  const [lastCalculation, setLastCalculation] = useState<BmiCalculation | null>(
    null
  );

  const { mutate } = useGetBmiCalculations();

  const form = useForm<BmiBodyMeasurements>({
    resolver: zodResolver(bmiBodyMeasurementsSchema),
    defaultValues: {
      weight: undefined,
      height: undefined,
    },
    mode: "onChange",
  });

  const onSubmit = async (values: BmiBodyMeasurements) => {
    const result = await createBmiCalculation(values.weight, values.height);

    if (!result.success) {
      console.error("Failed to create BMI calculation:", result.error);
      return;
    }

    if (result.success) {
      setLastCalculation(result.data);
      onCalculationCreated?.();
      mutate();
      // Reset form after successful calculation
      form.reset({
        weight: undefined,
        height: undefined,
      });
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculate BMI</CardTitle>
        <p className="text-sm text-muted-foreground">
          Enter your weight (kg) and height (cm) to calculate your BMI
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight (kg)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter weight in kg"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(
                          value === "" ? undefined : Number(value)
                        );
                      }}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height (cm)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter height in cm"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(
                          value === "" ? undefined : Number(value)
                        );
                      }}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Calculating..." : "Calculate BMI"}
            </Button>
          </form>
        </Form>

        {/* Display last calculation result */}
        {lastCalculation && (
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <div className="text-center">
              <div className="text-3xl font-bold">{lastCalculation.bmi}</div>
              <div className="text-lg font-semibold">
                {lastCalculation.category}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
