# Clean Architecture Prompts Framework

A structured approach to implementing features using Clean Architecture principles with AI-assisted development.

## 🏛️ Framework Overview

This framework provides a systematic way to build features following Clean Architecture patterns, ensuring separation of concerns, testability, and maintainability. The framework leverages AI assistants (like Claude or Cursor) to generate implementation plans and execute them in the correct architectural order.

## 📋 Process Workflow

### Step 1: Requirements Gathering

Start with a clear requirements document that outlines:

- Feature functionality and business rules
- User interactions and interface requirements
- Data persistence needs
- External integrations (if any)
- Constraints and validation rules

**Example Requirements:**

```markdown
Create a BMI calculator with a form that calculates BMI, saves each calculation to local storage as history, and displays all previous calculations in a list. The records saved are only allowed to be viewed - you cannot update them or delete them.
```

### Step 2: Generate Execution Plans

Execute the Claude command `/createplan` passing the requirements document as argument:

```
/createplan <requirements-document>
```

This command automatically generates 5 detailed execution plans:

1. **Domain Plan** (`domain.md`) - Entities, business logic, validations, and ports
2. **Services Plan** (`services.md`) - Data persistence, external APIs, and adapter implementations
3. **Hooks Plan** (`hooks.md`) - Data fetching hooks using SWR
4. **Components Plan** (`components.md`) - UI layer implementation with Shadcn, Tailwind, and React Hook Form
5. **Testing Plan** (`testing.md`) - Test strategies using Vitest and React Testing Library

Each plan is created in `.claude/features/<feature>/` directory and references specific Cursor rules for context and standards.

### Step 3: Plan Review and Refinement

Review each generated plan and make necessary adjustments:

- Verify business logic accuracy
- Confirm technical approach alignment
- Adjust implementation details as needed
- Ensure architectural consistency across all layers

### Step 4: Sequential Plan Execution

Execute the plans in the following **mandatory order** due to dependency requirements:

```
1. Domain Layer    → 2. Services Layer → 3. Hooks Layer → 4. Components Layer → 5. Testing Layer
```

#### Why This Order Matters:

- **Domain** defines the core business entities and rules (no dependencies)
- **Services** implement data persistence using domain entities and ports
- **Hooks** use services for data fetching operations
- **Components** consume hooks and domain logic for UI implementation
- **Testing** validates all previous layers working together

## 🚀 Getting Started

1. Create your requirements document
2. Run `/createplan <requirements>` in Claude
3. Review and adjust the generated plans
4. Execute plans in order: Domain → Services → Hooks → Components → Testing
5. Validate the complete feature works as expected

## 📝 Example: BMI Calculator Implementation

The BMI Calculator feature serves as a reference implementation showing:

- Domain entities with business rules
- Services layer with localStorage integration
- Custom hooks for data fetching
- Component layer with forms and data display
- Comprehensive testing strategy

This framework ensures every feature follows the same high-quality architectural standards while maintaining development speed and consistency.
