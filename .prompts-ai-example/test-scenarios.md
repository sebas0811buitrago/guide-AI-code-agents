@bmi-calculator.tsx

use the

# BMI Calculator Test Scenarios

Act as a senior frontend developer and use the testing and architecture guides to build a comprehensive test suite for the BMI calculator feature.

## Feature Summary

The BMI calculator allows users to calculate their BMI and save records over time. The feature consists of a form that captures weight and height information, calculates the BMI based on these inputs, and saves the result as a historical record. The saved records are displayed in a list showing weight, height, calculated BMI, and the associated weight category (underweight, normal, overweight, obese).

## Test Scenarios

- Should calculate BMI correctly when user enters valid weight and height
- Should display "Normal Weight" category when BMI is between 18.5 and 24.9
- Should display "Underweight" category when BMI is below 18.5
- Should display "Overweight" category when BMI is between 25 and 29.9
- Should display "Obese" category when BMI is 30 or above
- Should display error message when user submits form with empty weight or height fields
- Should display error message when user submits form with weight below 1 kg or above 200 kg
- Should display error message when user submits form with height below 1 cm or above 200 cm

**Additional Notes:** Implement these tests as integration tests for the bmi-calculator.tsx component. Use metric units (weight in kg, height in cm).

For building the tests, follow these phases:

## Phase 1: Feature and Rules Discovery

1. Understand the module the user wants to test, and identify the different architecture layers outlined in the architecture guidelines cursor rules.

2. Identify testing boundaries as outlined in the testing guidelines rule.

3. Follow the rules and standards explained in the testing guidelines rule

## Phase 2: Test Implementation

1. Create the tests one by one, and run each test after finishing it. Find any issues in the test and try to fix them. If something is unclear or problematic, stop and ask follow-up questions.

2. Don't start creating other tests until the current one passes correctly.
