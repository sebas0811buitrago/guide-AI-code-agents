# 🪝 Hooks Layer Prompt Generator

## 📋 Purpose

This rule analyzes user requirements and generates comprehensive, structured prompts for implementing data fetching hooks using SWR patterns following the established codebase conventions.

## 🎯 Usage Instructions

When a user provides a requirement for data fetching, generate a prompt following this structure:

### 1. 📖 Requirement Analysis

- Identify the data entity/resource to fetch
- Determine if it's a single item or collection
- Identify required parameters (IDs, filters, etc.)
- Assess caching and revalidation needs

### 2. 🪝 Hook Implementation Plan

Generate prompt sections using this template:

```markdown
## 🔗 Data Fetching Hook Implementation

### Hook Requirements

- **Entity**: [Entity name and type]
- **Operation**: [GET single/collection, with parameters]
- **Dependencies**: [Required IDs or parameters]
- **Caching Strategy**: [Standard SWR, Immutable, or specific config]

### Implementation Specifications

- [Hook naming convention requirements]
- [Parameter validation needs]
- [Conditional fetching logic]
- [Error handling considerations]

## 🔧 Hook Generation Plan

<hook-signature>
[Instructions for hook function signature and naming]
</hook-signature>

<swr-key>
[Instructions for SWR key generation and naming conventions]
</swr-key>

<fetcher-integration>
[Instructions for integrating with service layer functions]
- Service function requirements
- Parameter passing specifications
- Data transformation if needed
</fetcher-integration>

<conditional-logic>
[Instructions for conditional fetching logic if parameters are optional]
</conditional-logic>

## ❓ Clarification Questions

[Generate specific questions about unclear requirements]
```

## 🎨 Style Guidelines

### Formatting Rules:

- Use emojis for main section headers
- Use `<section-name>` tags for implementation areas
- Maintain clear bullet point structure
- Reference SWR hook rule at the top
- Include specific key naming conventions

### Content Focus:

- **Include**: Entity types, parameter requirements, key naming, conditional logic
- **Exclude**: Specific code implementations, detailed syntax
- **Emphasize**: SWR patterns, naming conventions, service integration

### Key Naming Conventions:

Follow these patterns for SWR keys:

- Collections: `GET_ALL_[ENTITY_NAME]S` (e.g., `GET_ALL_BMI_RECORDS`)
- Single items: `GET_[ENTITY_NAME]_BY_ID` (e.g., `GET_USER_BY_ID`)
- Filtered data: `GET_[ENTITY_NAME]S_BY_[FILTER]` (e.g., `GET_REPORTS_BY_CLIENT`)
- Simple collections: Use lowercase with hyphens (e.g., `folders`, `user-permissions`)

### Question Generation:

Always end with clarification questions about:

- Required vs optional parameters
- Caching behavior preferences
- Data transformation needs
- Error handling requirements

## 🔍 Example Prompt Structure

For a requirement like "Create hook to fetch user's BMI records":

```markdown
SWR guidelines : you will find code examples and guidelines here, TAKE A LOOK TO `.cursor/rules/swr-hook.mdc` before implementing anything

## 🔗 Data Fetching Hook Implementation

### Hook Requirements

- **Entity**: BMI Record collection
- **Operation**: GET collection by user ID
- **Dependencies**: User ID (required)
- **Caching Strategy**: Standard SWR with revalidation

### Implementation Specifications

- Hook named `useGetBmiRecords` following convention
- Accepts `userId` as required parameter
- Uses conditional fetching when userId is present
- Returns standard SWR response object

<hook-signature>
Create hook `useGetBmiRecords(userId: string)` that fetches BMI records for a specific user
</hook-signature>

<swr-key>
Use key "GET_ALL_BMI_RECORDS" with user ID parameter for cache differentiation
</swr-key>

<fetcher-integration>
Integrate with service function that:
- Accepts userId parameter
- Fetches BMI records from API
- Returns properly typed BMI record array
- Handles API errors appropriately
</fetcher-integration>

<conditional-logic>
Implement shouldFetch logic to only fetch when userId is provided and not null/undefined
</conditional-logic>

## ❓ Clarification Questions

- Should this hook support pagination or fetch all records at once?
- Are there any filtering options needed (date range, status, etc.)?
- Should the hook support real-time updates or standard caching?
- What should happen if the user has no BMI records?
```

## 🔄 Hook Types Supported

### Collection Hooks

- Fetching arrays/lists of entities
- With or without filtering parameters
- Pagination support considerations

### Single Entity Hooks

- Fetching by unique identifier
- Conditional fetching based on ID presence
- Related entity loading

### Computed/Derived Data Hooks

- Data that requires processing
- Multiple service calls coordination
- Complex parameter combinations

### Authentication/User Context Hooks

- User-specific data fetching
- Permission-based data access
- Session-dependent information

## ✅ Success Criteria

Generated prompts should:

- Reference the SWR hook rule explicitly
- Provide clear, actionable implementation steps
- Follow established naming conventions
- Include appropriate error handling guidance
- Specify caching behavior clearly
- Generate relevant clarification questions
