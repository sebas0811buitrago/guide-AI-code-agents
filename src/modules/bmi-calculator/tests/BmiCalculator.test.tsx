import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BmiCalculator } from "../components/bmi-calculator";

// Import service modules for spying
import * as createBmiCalculation from "../services/create-bmi-calculation";
import * as getAllBmiCalculations from "../services/get-all-bmi-calculations";

import {
  BMI_CALCULATION_NORMAL_MOCK,
  BMI_CALCULATION_UNDERWEIGHT_MOCK,
  BMI_CALCULATION_OVERWEIGHT_MOCK,
  BMI_CALCULATION_OBESE_MOCK,
  BMI_CALCULATION_SUCCESS_RESULT,
  createBmiCalculationResult,
} from "./mocks/BmiCalculatorMocks";

// Test utilities
const fillFormAndSubmit = async (weight: string, height: string) => {
  const weightInput = screen.getByLabelText(/weight/i);
  const heightInput = screen.getByLabelText(/height/i);
  const submitButton = screen.getByRole("button", { name: /calculate bmi/i });

  await userEvent.clear(weightInput);
  await userEvent.clear(heightInput);

  if (weight) await userEvent.type(weightInput, weight);
  if (height) await userEvent.type(heightInput, height);

  await userEvent.click(submitButton);
};

describe("BmiCalculator", () => {
  it("Should calculate BMI correctly when user enters valid weight and height", async () => {
    const expectedResult = createBmiCalculationResult(70, 175);
    const createBmiCalculationMock = vi
      .spyOn(createBmiCalculation, "createBmiCalculation")
      .mockResolvedValue(BMI_CALCULATION_SUCCESS_RESULT(expectedResult));

    const getAllBmiCalculationsMock = vi
      .spyOn(getAllBmiCalculations, "getAllBmiCalculations")
      .mockResolvedValue({ success: true, data: [] });

    render(<BmiCalculator />);

    await fillFormAndSubmit("70", "175");

    // Verify the service was called with correct parameters (weight, height, bmi, category)
    expect(createBmiCalculationMock).toHaveBeenCalledWith(
      70,
      175,
      expectedResult.bmi,
      expectedResult.category
    );

    // Verify BMI result is displayed
    await waitFor(() => {
      expect(screen.getByText(expectedResult.bmi.toString())).toBeVisible();
    });
  });

  it('Should display "Normal" category when BMI is between 18.5 and 24.9', async () => {
    const createBmiCalculationMock = vi
      .spyOn(createBmiCalculation, "createBmiCalculation")
      .mockResolvedValue(
        BMI_CALCULATION_SUCCESS_RESULT(BMI_CALCULATION_NORMAL_MOCK)
      );

    const getAllBmiCalculationsMock = vi
      .spyOn(getAllBmiCalculations, "getAllBmiCalculations")
      .mockResolvedValue({ success: true, data: [] });

    render(<BmiCalculator />);

    await fillFormAndSubmit("70", "175");

    // Verify the service was called with correct parameters (weight, height, bmi, category)
    expect(createBmiCalculationMock).toHaveBeenCalledWith(
      70,
      175,
      BMI_CALCULATION_NORMAL_MOCK.bmi,
      BMI_CALCULATION_NORMAL_MOCK.category
    );

    // Verify "Normal" category is displayed
    await waitFor(() => {
      expect(screen.getByText("Normal")).toBeVisible();
      expect(screen.getByText("22.9")).toBeVisible();
    });
  });

  it('Should display "Underweight" category when BMI is below 18.5', async () => {
    const createBmiCalculationMock = vi
      .spyOn(createBmiCalculation, "createBmiCalculation")
      .mockResolvedValue(
        BMI_CALCULATION_SUCCESS_RESULT(BMI_CALCULATION_UNDERWEIGHT_MOCK)
      );

    const getAllBmiCalculationsMock = vi
      .spyOn(getAllBmiCalculations, "getAllBmiCalculations")
      .mockResolvedValue({ success: true, data: [] });

    render(<BmiCalculator />);

    await fillFormAndSubmit("45", "170");

    // Verify the service was called with correct parameters (weight, height, bmi, category)
    expect(createBmiCalculationMock).toHaveBeenCalledWith(
      45,
      170,
      BMI_CALCULATION_UNDERWEIGHT_MOCK.bmi,
      BMI_CALCULATION_UNDERWEIGHT_MOCK.category
    );

    // Verify "Underweight" category is displayed
    await waitFor(() => {
      expect(screen.getByText("Underweight")).toBeVisible();
      expect(screen.getByText("15.6")).toBeVisible();
    });
  });

  it('Should display "Overweight" category when BMI is between 25 and 29.9', async () => {
    const createBmiCalculationMock = vi
      .spyOn(createBmiCalculation, "createBmiCalculation")
      .mockResolvedValue(
        BMI_CALCULATION_SUCCESS_RESULT(BMI_CALCULATION_OVERWEIGHT_MOCK)
      );

    const getAllBmiCalculationsMock = vi
      .spyOn(getAllBmiCalculations, "getAllBmiCalculations")
      .mockResolvedValue({ success: true, data: [] });

    render(<BmiCalculator />);

    await fillFormAndSubmit("85", "175");

    // Verify the service was called with correct parameters (weight, height, bmi, category)
    expect(createBmiCalculationMock).toHaveBeenCalledWith(
      85,
      175,
      BMI_CALCULATION_OVERWEIGHT_MOCK.bmi,
      BMI_CALCULATION_OVERWEIGHT_MOCK.category
    );

    // Verify "Overweight" category is displayed
    await waitFor(() => {
      expect(screen.getByText("Overweight")).toBeVisible();
      expect(screen.getByText("27.8")).toBeVisible();
    });
  });

  it('Should display "Obese" category when BMI is 30 or above', async () => {
    const createBmiCalculationMock = vi
      .spyOn(createBmiCalculation, "createBmiCalculation")
      .mockResolvedValue(
        BMI_CALCULATION_SUCCESS_RESULT(BMI_CALCULATION_OBESE_MOCK)
      );

    const getAllBmiCalculationsMock = vi
      .spyOn(getAllBmiCalculations, "getAllBmiCalculations")
      .mockResolvedValue({ success: true, data: [] });

    render(<BmiCalculator />);

    await fillFormAndSubmit("100", "175");

    // Verify the service was called with correct parameters (weight, height, bmi, category)
    expect(createBmiCalculationMock).toHaveBeenCalledWith(
      100,
      175,
      BMI_CALCULATION_OBESE_MOCK.bmi,
      BMI_CALCULATION_OBESE_MOCK.category
    );

    // Verify "Obese" category is displayed
    await waitFor(() => {
      expect(screen.getByText("Obese")).toBeVisible();
      expect(screen.getByText("32.7")).toBeVisible();
    });
  });

  it("Should display error message when user submits form with empty weight or height fields", async () => {
    const createBmiCalculationMock = vi.spyOn(
      createBmiCalculation,
      "createBmiCalculation"
    );

    const getAllBmiCalculationsMock = vi
      .spyOn(getAllBmiCalculations, "getAllBmiCalculations")
      .mockResolvedValue({ success: true, data: [] });

    render(<BmiCalculator />);

    // Submit form with empty weight
    await fillFormAndSubmit("", "175");

    // Verify validation error is displayed and service is not called
    expect(screen.getByText(/weight is required/i)).toBeVisible();
    expect(createBmiCalculationMock).not.toHaveBeenCalled();

    // Submit form with empty height
    await fillFormAndSubmit("70", "");

    // Verify validation error is displayed and service is not called
    expect(screen.getByText(/height is required/i)).toBeVisible();
    expect(createBmiCalculationMock).not.toHaveBeenCalled();
  });

  it("Should display error message when user submits form with weight below 1 kg or above 1000 kg", async () => {
    const createBmiCalculationMock = vi.spyOn(
      createBmiCalculation,
      "createBmiCalculation"
    );

    const getAllBmiCalculationsMock = vi
      .spyOn(getAllBmiCalculations, "getAllBmiCalculations")
      .mockResolvedValue({ success: true, data: [] });

    render(<BmiCalculator />);

    // Submit form with weight below minimum
    await fillFormAndSubmit("0", "175");

    // Verify validation error is displayed and service is not called
    expect(screen.getByText(/weight must be at least 1 kg/i)).toBeVisible();
    expect(createBmiCalculationMock).not.toHaveBeenCalled();

    // Submit form with weight above maximum
    await fillFormAndSubmit("1001", "175");

    // Verify validation error is displayed and service is not called
    expect(screen.getByText(/weight cannot exceed 1000 kg/i)).toBeVisible();
    expect(createBmiCalculationMock).not.toHaveBeenCalled();
  });

  it("Should display error message when user submits form with height below 30 cm or above 300 cm", async () => {
    const createBmiCalculationMock = vi.spyOn(
      createBmiCalculation,
      "createBmiCalculation"
    );

    const getAllBmiCalculationsMock = vi
      .spyOn(getAllBmiCalculations, "getAllBmiCalculations")
      .mockResolvedValue({ success: true, data: [] });

    render(<BmiCalculator />);

    // Submit form with height below minimum
    await fillFormAndSubmit("70", "29");

    // Verify validation error is displayed and service is not called
    expect(screen.getByText(/height must be at least 30 cm/i)).toBeVisible();
    expect(createBmiCalculationMock).not.toHaveBeenCalled();

    // Submit form with height above maximum
    await fillFormAndSubmit("70", "301");

    // Verify validation error is displayed and service is not called
    expect(screen.getByText(/height cannot exceed 300 cm/i)).toBeVisible();
    expect(createBmiCalculationMock).not.toHaveBeenCalled();
  });
});
