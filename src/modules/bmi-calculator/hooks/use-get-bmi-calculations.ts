import useSWR from "swr";
import { getAllBmiCalculations } from "../services/get-all-bmi-calculations";

const BMI_CALCULATIONS_KEY = "bmi-calculations";

export const useGetBmiCalculations = () => {
  const response = useSWR(BMI_CALCULATIONS_KEY, getAllBmiCalculations, {});

  return {
    ...response,
  };
};
