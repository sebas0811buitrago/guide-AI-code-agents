# BMI Calculator Hooks Layer Plan

SWR guidelines: you will find code examples and guidelines here, TAKE A LOOK TO `.cursor/rules/swr-hook.mdc` before implementing anything

## 🔗 Data Fetching Hook Implementation

### Hook Requirements

- **Entity**: BMI Calculation
- **Operation**: GET all BMI calculations from localStorage
- **Dependencies**: None (always fetch available data)
- **Caching Strategy**: Standard SWR with revalidation on focus

### Implementation Specifications

- Hook named `useGetBmiCalculations` following convention
- No parameters required (fetches all calculations)
- Uses conditional fetching to handle localStorage availability
- Returns standard SWR response object with calculations array
- Handles empty state when no calculations exist

<hook-signature>
Create hook `useGetBmiCalculations()` that fetches all BMI calculations from localStorage
</hook-signature>

<swr-key>
Use key "bmi-calculations" for cache identification since we're fetching the complete collection
</swr-key>

<fetcher-integration>
Integrate with service layer functions:
- Use the getBmiCalculations service function
- Handle Result pattern returns from service layer
- Transform service errors into SWR-compatible format
- Ensure proper data serialization from localStorage
</fetcher-integration>

<conditional-logic>
Implement logic to handle localStorage availability:
- Check if localStorage is available before fetching
- Provide fallback behavior when localStorage is disabled
- Handle cases where localStorage returns null or invalid data
</conditional-logic>

## ❓ Clarification Questions

- Should the hook automatically revalidate when new calculations are added to localStorage?
- How should the hook handle localStorage being unavailable or disabled?
- Should there be a separate hook for getting a single BMI calculation by ID?
- Are there any specific error states that need special handling in the UI?