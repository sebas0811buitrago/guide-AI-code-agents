# Domain Layer Generator Rules

## Purpose

These rules help generate structured domain layer prompts from business requirements, focusing on entities, business logic, and validation without technical implementation details.

## How to Use

When you receive a requirement, transform it into a domain layer prompt following the structure below:

## Template Structure

### 1. Introduction

```

Act as senior React developer, expert in ports and adapters architecture and in clear and clean code.

Architecture guidelines : you will find code examples and architecture guidelines here, TAKE A LOOK TO  `.cursor/rules/architecture.mdc` before implementing anything

Follow the architecture and form standards guidelines to build the following feature:



[REQUIREMENT_DESCRIPTION]

Take the following steps:

Create the whole module in the @/[module-name] module in the @/[app-name] app

1. Create the domain layer, you will need [number] entities:
```

### 2. Entity Definition Pattern

For each entity identified in the requirement:

```
<entity-name-entity>
  [id field if needed]: (required/optional, validation rules)
  field: [field_name] (required/optional, validation rules) => description/unit/purpose
  field: [field_name] (required/optional, validation rules) => description/unit/purpose
  ...

  [if applicable]
  ports: in the same entity file create ports for [list specific operations like: creating, getting, updating, deleting, etc.]

  [business logic section if needed]
  business logic: create a function [description of business rule/calculation]
  business logic: create a function [description of transformation/categorization]
</entity-name-entity>
```

### 3. Closing

```
Ask follow up questions if you are not sure of something, do not make guesses
```

## Entity Identification Guidelines

### Core Entities

- **Data Entities**: Objects that hold information (User, Product, Order, etc.)
- **Value Objects**: Immutable objects that represent values (Email, Money, Date Range, etc.)
- **Aggregate Roots**: Main entities that control access to related entities

### Field Validation Patterns

- **Required/Optional**: Clearly specify if field is required
- **Numeric Constraints**: min/max values, decimal places
- **String Constraints**: min/max length, format patterns
- **Enum Values**: specific allowed values
- **Relationships**: references to other entities

### Business Logic Patterns

- **Calculations**: Mathematical operations, formula applications
- **Transformations**: Data format changes, categorizations
- **Validations**: Complex business rule validations
- **State Transitions**: Status changes, workflow steps

### Port Patterns

Common port operations to consider:

- **CRUD Operations**: create, read, update, delete
- **Query Operations**: find by criteria, search, filter
- **Batch Operations**: bulk operations, imports, exports
- **Integration Operations**: sync with external systems

## Examples of Requirements to Entities Mapping

### E-commerce Example

**Requirement**: "Product catalog with inventory management"
**Entities**: Product, Category, Inventory, Price
**Business Logic**: Stock calculation, price tiers, availability rules

### Healthcare Example

**Requirement**: "Patient appointment scheduling system"
**Entities**: Patient, Appointment, TimeSlot, Provider
**Business Logic**: Availability checking, conflict resolution, reminder scheduling

### Financial Example

**Requirement**: "Expense tracking with budget alerts"
**Entities**: Expense, Budget, Category, Alert
**Business Logic**: Budget calculation, alert thresholds, spending analysis

## Validation Rules Reference

### Common Field Types

- **Email**: format validation, uniqueness
- **Phone**: format validation by country
- **Date**: range validation, future/past constraints
- **Money**: currency, precision, positive/negative rules
- **Percentage**: 0-100 range, decimal places
- **URL**: format validation, reachability
- **Text**: length limits, character restrictions
- **Numbers**: ranges, precision, units

## Best Practices

1. **Keep entities focused**: Each entity should have a single responsibility
2. **Use business terminology**: Field names should match domain language
3. **Be specific with validation**: Include actual min/max values, formats
4. **Include units**: Specify measurement units (kg, cm, USD, etc.)
5. **Define business rules clearly**: Explain the "why" behind calculations
6. **Consider relationships**: How entities connect and interact
7. **Think about ports early**: What operations will be needed on each entity

## Anti-Patterns to Avoid

- Don't include technical implementation details (database schemas, API endpoints)
- Don't specify UI components or layouts
- Don't include framework-specific code
- Don't make assumptions about data sources
- Don't over-engineer simple requirements
- Don't forget to specify validation rules
- Don't mix presentation concerns with domain logic
