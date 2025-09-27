# BMI Calculator Test Scenarios

@bmi-calculator-page.tsx

# BMI Calculator Test Scenarios

Act as a senior frontend developer and use the testing and architecture guides to build a comprehensive test suite for the BMI Calculator feature.

## Feature Summary

The BMI Calculator allows users to input their weight (kg) and height (cm) to calculate their Body Mass Index (BMI) and automatically categorize the result. The feature consists of a form with weight and height inputs, a calculate button that computes the BMI using the formula (weight / (height/100)²), and displays the result with the appropriate category (Underweight, Normal, Overweight, Obese). Each calculation is automatically saved to localStorage and displayed in a history list on the right side of the screen. The history shows all previous calculations with BMI value, category, weight, height, and calculation date in reverse chronological order. Users can only view the history records - no editing or deletion is allowed. The form clears after each successful calculation and provides real-time validation feedback for invalid inputs.

## Test Scenarios

### Happy Path Tests

- Should calculate BMI correctly when valid weight and height are entered
- Should display correct BMI category based on calculated BMI value
- Should save calculation to localStorage when Calculate BMI button is clicked
- Should display new calculation in history list immediately after calculation
- Should clear form fields after successful calculation
- Should display all previous calculations in reverse chronological order
- Should show BMI values formatted to 1 decimal place
- Should display "No calculations yet" message when history is empty

### Edge Cases

- Should prevent form submission when weight field is empty
- Should prevent form submission when height field is empty
- Should show validation error for weight values below 1 kg
- Should show validation error for weight values above 1000 kg
- Should show validation error for height values below 30 cm
- Should show validation error for height values above 300 cm
- Should handle localStorage being unavailable gracefully
- Should handle corrupted data in localStorage without crashing
- Should display appropriate error message when BMI calculation fails
- Should handle very precise decimal inputs correctly

For building the tests, follow these phases:

## Phase 1: Feature and Rules Discovery

1. Understand the module the user wants to test, and identify the different architecture layers outlined in the architecture guidelines cursor rules.

2. Identify testing boundaries as outlined in the testing guidelines rule.

3. Follow the rules and standards explained in the testing guidelines rule

## Phase 2: Test Implementation

1. Create the tests one by one, and run each test after finishing it. Find any issues in the test and try to fix them. If something is unclear or problematic, stop and ask follow-up questions.

2. Don't start creating other tests until the current one passes correctly.