# BMI Calculator Components Layer Plan

## 🎨 Component Layer Implementation

### Reference Guidelines

- .cursor/rules/architecture-guidelines.mdc => reference this cursor rule
- .cursor/rules/forms-guide.mdc => reference this cursor rule
- @/modules/bmi-calculator => reference this module folder

### Component Requirements

Using as a base all of the already created layers (domain, hooks, services), create the component layer for the BMI Calculator feature.

Use as a guide the attached mockup image provided, which shows a clean layout with a calculator form on the left and history display on the right.

### Components Structure

<main-components>
Create 3 primary components with detailed specifications:

1. **BmiCalculatorForm**: BMI calculation input form
   - Form fields for weight (kg) and height (cm) input using number inputs
   - Weight field: placeholder "Enter weight in kg", validation min: 1, max: 1000
   - Height field: placeholder "Enter height in cm", validation min: 30, max: 300
   - "Calculate BMI" button that triggers calculation and saves to localStorage
   - Real-time validation feedback for invalid inputs
   - Display calculated BMI result and category below the form after calculation
   - Clear form after successful calculation
   - Use React Hook Form with Zod validation from domain layer

2. **BmiHistoryList**: Historical calculations display
   - Display list of all previous BMI calculations fetched via useGetBmiCalculations hook
   - Each history item shows: BMI value, category, weight, height, and calculation date
   - Format BMI values to 1 decimal place
   - Display calculations in reverse chronological order (newest first)
   - Show "No calculations yet" message when history is empty
   - Read-only display - no edit or delete functionality as specified

3. **BmiCalculatorPage**: Main page layout component
   - Two-column layout matching the mockup design
   - Left column contains BmiCalculatorForm
   - Right column contains BmiHistoryList
   - Page title "BMI Calculator" and subtitle "Calculate your Body Mass Index and track your history"
   - Responsive design that stacks columns on mobile devices
</main-components>

<design-system-usage>
Make sure to use the system design components available at atoms-ui package.

Key components to consider:

- Form components (Input, Button, Label, etc.) for the calculator form
- Layout components (Container, Card, Grid, etc.) for page structure
- Typography components for headings and text display
- Feedback components (Alert, etc.) for validation messages and empty states
</design-system-usage>

<additional-considerations>
Additional considerations:
- Initialize form fields with empty string values, not undefined
- Use proper number input type for weight and height fields
- Display BMI results prominently with category color coding (green for Normal, yellow for Overweight, etc.)
- Handle loading states while fetching calculation history
- Ensure accessibility with proper labels and ARIA attributes
- Responsive design that works on mobile and desktop
- Error boundaries for graceful error handling
</additional-considerations>

## ❓ Clarification Questions

- Should the BMI result display include visual indicators (colors) for different BMI categories?
- Are there any specific responsive breakpoints that should be considered for the two-column layout?
- Should there be any animations or transitions when new calculations are added to the history?
- Are there any accessibility requirements beyond standard practices that should be implemented?