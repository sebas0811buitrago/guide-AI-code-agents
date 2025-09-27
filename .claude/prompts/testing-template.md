# 🧪 Test Suite Prompt Generator

## 📋 Purpose

This rule analyzes user requirements and generates comprehensive, structured prompts for implementing test suites following the established testing guidelines and architecture patterns in the codebase.

## 🎯 Usage Instructions

When a user provides a requirement for test implementation, generate a prompt following this structure:

### 1. 📖 Requirement Analysis

- Identify the feature components and functionality to test
- Determine test boundaries based on architecture layers
- Assess user interactions and business logic scenarios
- Identify edge cases and validation requirements

### 2. 🧪 Test Suite Implementation Plan

Generate prompt sections using this template:

```markdown
@[component-name].tsx

# [Feature Name] Test Scenarios

Act as a senior frontend developer and use the testing and architecture guides to build a comprehensive test suite for the [feature name] feature.

## Feature Summary

[Detailed description of the feature functionality, user interactions, and data flow. Include what the feature allows users to do, the main components involved, and how data is handled.]

## Test Scenarios

[List of specific test cases covering different aspects:]

### Happy Path Tests

- It should [expected behavior] when [user action or condition]
- It should [expected behavior] when [user action or condition]
- It should [expected behavior] when [user action or condition]

### Edge Cases

- It should [expected behavior] when [boundary condition or invalid input]
- It should [expected behavior] when [error condition occurs]
- It should [expected behavior] when [validation fails]

For building the tests, follow these phases:

## Phase 1: Feature and Rules Discovery

1. Understand the module the user wants to test, and identify the different architecture layers outlined in the architecture guidelines cursor rules.

2. Identify testing boundaries as outlined in the testing guidelines rule.

3. Follow the rules and standards explained in the testing guidelines rule

## Phase 2: Test Implementation

1. Create the tests one by one, and run each test after finishing it. Find any issues in the test and try to fix them. If something is unclear or problematic, stop and ask follow-up questions.

2. Don't start creating other tests until the current one passes correctly.
```

## 🎨 Style Guidelines

### Formatting Rules:

- Use markdown headers for clear section organization
- Group test scenarios by test type (Happy Path, Edge Cases, Integration)
- Include implementation phases at the bottom
- Use bullet points for individual test scenarios

### Content Focus:

- **Include**: Feature functionality, user interactions, data validation, error scenarios
- **Exclude**: Specific test code implementations, detailed syntax
- **Emphasize**: User behavior, business logic, boundary conditions, integration points
- **Test Format**: Always use "It should <condition> when <action>" format for test descriptions

### Test Categories:

Generate prompts for these test types:

#### Happy Path Tests

- It should work as expected when core functionality is used
- It should process data correctly when valid inputs are provided
- It should respond appropriately when user interactions are successful
- It should display and format data correctly when rendering content

#### Edge Cases

- It should handle boundary values correctly when testing limits
- It should respond appropriately when invalid input is provided
- It should display proper messaging when in empty states
- It should handle errors gracefully when error conditions occur

### Question Generation:

Always end Phase 2 with guidance about:

- Test implementation approach (unit vs integration)
- Iterative test development process
- Error handling and debugging steps
- When to seek clarification

## 🔍 Example Prompt Structure

For a requirement like "Create tests for shopping cart functionality":

```markdown
@shopping-cart.tsx

# Shopping Cart Test Scenarios

Act as a senior frontend developer and use the testing and architecture guides to build a comprehensive test suite for the shopping cart feature.

## Feature Summary

The shopping cart allows users to add products to their cart, modify quantities, and view total prices. The feature consists of a product list where users can add items, a cart display showing added items with quantities and individual prices, and a total calculation that updates in real-time. Users can increase or decrease quantities for items in their cart, and remove items entirely. The cart state persists across page navigation within the session.

## Test Scenarios

### Happy Path Tests

- It should add product to cart when user clicks "Add to Cart" button
- It should display correct product name, price, and quantity in cart when items are added
- It should calculate total price correctly when multiple items are added
- It should update total price when quantity is modified
- It should persist cart state when navigating between pages

### Edge Cases

- It should update quantity when adding the same product multiple times
- It should prevent negative quantities when decreasing item count
- It should display appropriate message when cart is empty
- It should handle gracefully when products have zero or invalid prices
- It should limit maximum quantity per item when preventing oversized orders

For building the tests, follow these phases:

## Phase 1: Feature and Rules Discovery

1. Understand the module the user wants to test, and identify the different architecture layers outlined in the architecture guidelines cursor rules.

2. Identify testing boundaries as outlined in the testing guidelines rule.

3. Follow the rules and standards explained in the testing guidelines rule

## Phase 2: Test Implementation

1. Create the tests one by one, and run each test after finishing it. Find any issues in the test and try to fix them. If something is unclear or problematic, stop and ask follow-up questions.

2. Don't start creating other tests until the current one passes correctly.
```

## 🏗️ Test Architecture Patterns

### Testing Patterns:

- **User-Centric**: Test from user perspective, not implementation details
- **Scenario-Based**: Focus on real-world usage scenarios
- **Iterative**: Build and validate one test at a time
- **Comprehensive**: Cover happy paths, edge cases, and error conditions

## ✅ Success Criteria

Generated prompts should:

- Provide comprehensive feature summary with user interactions
- Include categorized test scenarios (Happy Path, Edge Cases, Integration)
- Specify testing approach and implementation guidance
- Include phased implementation strategy
- Generate scenarios that cover both functionality and user experience
- Provide clear guidance for iterative test development

## 🔄 Feature Types Supported

### Form-Heavy Features

- Data input validation and submission
- Multi-step form workflows
- Real-time validation feedback
- Error handling and recovery

### Data-Heavy Features

- Data display and formatting
- Sorting, filtering, and pagination
- Data loading and caching
- Real-time data updates

### Interactive Features

- User action responses
- State management across interactions
- Complex user workflows
- Drag and drop functionality

### Business Logic Features

- Calculation and computation logic
- Rule-based behavior
- Conditional functionality
- Data transformation and processing
