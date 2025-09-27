"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { useGetBmiCalculations } from "../hooks/use-get-bmi-calculations";
import { BmiCalculation } from "../domain/bmi-calculation";

const BmiHistoryCard = ({ calculation }: { calculation: BmiCalculation }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="p-4 border rounded-lg bg-card">
      <div className="flex justify-between items-start mb-2">
        <div className="text-2xl font-bold">{calculation.bmi}</div>
        <div className="text-sm text-muted-foreground">
          {formatDate(calculation.calculatedAt)}
        </div>
      </div>

      <div className="text-lg font-semibold mb-2">{calculation.category}</div>

      <div className="text-sm text-muted-foreground">
        Weight: {calculation.weight}kg | Height: {calculation.height}cm
      </div>
    </div>
  );
};

export const BmiHistory = () => {
  const { data, error, isLoading } = useGetBmiCalculations();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>BMI History</CardTitle>
          <p className="text-sm text-muted-foreground">
            Your previous BMI calculations
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="text-muted-foreground">Loading...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>BMI History</CardTitle>
          <p className="text-sm text-muted-foreground">
            Your previous BMI calculations
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="text-destructive">Error loading BMI history</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const calculations = data?.success ? data.data : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>BMI History</CardTitle>
        <p className="text-sm text-muted-foreground">
          Your previous BMI calculations
        </p>
      </CardHeader>
      <CardContent>
        {calculations.length === 0 ? (
          <div className="flex items-center justify-center py-8">
            <div className="text-muted-foreground text-center">
              <p>No BMI calculations yet</p>
              <p className="text-sm">
                Calculate your first BMI to see it here!
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {calculations.map((calculation) => (
              <BmiHistoryCard key={calculation.id} calculation={calculation} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
