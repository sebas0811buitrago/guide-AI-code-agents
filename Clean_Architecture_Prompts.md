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

## 🏗️ Architecture Layers Explained

### 1. Domain Layer

**Purpose:** Core business logic and entities
**Contains:**

- Entity definitions with business rules
- Validation schemas
- Port interfaces (contracts for external dependencies)
- Pure business logic functions
- Value objects and enums

**Example Structure:**

```typescript
// entities/user.ts
interface User {
  id: UserId;
  email: Email;
  createdAt: Date;
}

// ports/user-repository.port.ts
interface UserRepositoryPort {
  create(user: User): Promise<Result<User, Error>>;
  findById(id: UserId): Promise<Result<User, NotFoundError>>;
}
```

### 2. Services Layer

**Purpose:** External integrations and data persistence
**Contains:**

- Adapter implementations (implementing domain ports)
- API clients and database connections
- Data transformation and serialization
- Error handling and resilience patterns

**Example Structure:**

```typescript
// adapters/local-storage-user.repository.ts
export class LocalStorageUserRepository implements UserRepositoryPort {
  async create(user: User): Promise<Result<User, Error>> {
    // Implementation details
  }
}
```

### 3. Hooks Layer

**Purpose:** Data fetching and state management
**Contains:**

- SWR-based data fetching hooks
- Custom React hooks for complex state logic
- Integration with services layer
- Cache management and error states

**Example Structure:**

```typescript
// hooks/use-get-users.ts
export const useGetUsers = () => {
  return useSWR("users", () => userService.getAll());
};
```

### 4. Components Layer

**Purpose:** User interface implementation
**Contains:**

- React components using Shadcn UI components
- Form components with React Hook Form integration
- Layout and page components
- Styling with Tailwind CSS

**Example Structure:**

```typescript
// components/user-form.tsx
export const UserForm = () => {
  const { data: users } = useGetUsers();
  // Component implementation
};
```

### 5. Testing Layer

**Purpose:** Quality assurance and validation
**Contains:**

- Unit tests for domain logic
- Integration tests for services
- Component tests with React Testing Library
- End-to-end test scenarios

## 🔧 Technical Standards

### Required Technologies

- **Frontend:** React, TypeScript, Next.js
- **UI Components:** Shadcn/UI with Tailwind CSS
- **Forms:** React Hook Form with Zod validation
- **Data Fetching:** SWR for client-side data management
- **Testing:** Vitest + React Testing Library
- **Architecture:** Ports & Adapters (Hexagonal Architecture)

### Code Quality Standards

- **Error Handling:** Result pattern for all operations
- **Type Safety:** Strict TypeScript configuration
- **Validation:** Zod schemas for runtime type checking
- **Testing:** Comprehensive test coverage across all layers
- **Documentation:** JSDoc for complex business logic

## 📁 File Structure Convention

```
src/
├── modules/
│   └── <feature-name>/
│       ├── domain/           # Business entities and logic
│       ├── services/         # External integrations
│       ├── hooks/           # Data fetching hooks
│       ├── components/      # React components
│       └── tests/          # Feature-specific tests
└── shared/
    ├── components/ui/      # Reusable UI components
    ├── domain/            # Shared domain patterns
    ├── services/          # Shared services
    └── lib/              # Utility functions
```

## 🎯 Benefits of This Framework

1. **Consistency:** Standardized approach across all features
2. **Maintainability:** Clear separation of concerns
3. **Testability:** Each layer can be tested in isolation
4. **Scalability:** Easy to add new features without affecting existing ones
5. **AI-Assisted:** Leverages AI for faster, more accurate implementation
6. **Documentation:** Self-documenting through structured plans

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
