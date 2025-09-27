"use client";

import { useState, useCallback } from "react";
import { BmiCalculatorForm } from "./bmi-calculator-form";
import { BmiHistory } from "./bmi-history";

export const BmiCalculator = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleCalculationCreated = useCallback(() => {
    // Trigger a refresh of the history component
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          BMI Calculator
        </h1>
        <p className="text-lg text-muted-foreground">
          Calculate your Body Mass Index and track your history
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left side - BMI Calculator Form */}
        <div>
          <BmiCalculatorForm onCalculationCreated={handleCalculationCreated} />
        </div>

        {/* Right side - BMI History */}
        <div>
          <BmiHistory />
        </div>
      </div>
    </div>
  );
};
