# Claude Code Configuration

## Project Context

This is a demo Next.js application for showcasing how to use clean architecture + vertical slicing in a React project, focused on learning about AI code agents.

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router (NEVER Pages Router)
- **Runtime**: React 19.1.1 + TypeScript 5
- **Styles**: Tailwind CSS 4 with custom tokens
- **Testing**: Vitest 3.2.4 with Testing Library
- **Forms**: React Hook Form 7.63.0 + Zod 4.1.11
- **Components**: Shadcn (Radix UI 2.1.7 + Lucide React 0.544.0)
- **Fetching**: SWR 2.3.6 + ky 1.10.0

## Architecture

This project follows a feature-based folder structure with ports and adapters architecture adapted for frontend React applications. Each module is self-contained and independent.

### Core Principles
- **Module Independence** - No dependencies between modules
- **App Folder Only** - Modules accessed only from the app folder
- **Shared Code Access** - Shared code can be accessed from both app and modules
- **Vertical Slicing** - Features are organized by business capability
- **Ports and Adapters** - Business logic is independent of external dependencies
- **Domain Layer Isolation** - The domain layer cannot have dependencies from any other layer
- **Layer Dependencies** - Components, hooks, and services layers can import anything freely from the domain layer

### Folder Structure
```
📁 project
├── 📁 src
│   ├── 📁 app # Modules are called and exposed through page URLs
│   ├── 📁 modules # All features are located here
│   │   ├── 📁 <module-name>
│   │   │   ├── 📁 components # React components of the module
│   │   │   ├── 📁 hooks # Reusable or isolated logic for React components
│   │   │   ├── 📁 domain # Entities and business logic
│   │   │   ├── 📁 services # Adapters that implement the ports
│   │   │   ├── 📁 utils # Utility functions for the module
│   │   │   └── 📁 tests # Test suite for the whole module
│   └── 📁 shared
│       ├── 📁 components # Design system components
│       ├── 📁 hooks # Reusable logic for the whole app
│       ├── 📁 domain # Reusable domain for the whole app
│       ├── 📁 services # Services used throughout the app
│       ├── 📁 utils # Utility functions used throughout the app
│       └── 📁 tests # Test suite for the whole app
```

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Testing Strategy

Follows the Testing Trophy approach focusing on integration tests over unit tests. Key principles:
- **Static Testing** (Foundation) - TypeScript + ESLint
- **Unit Testing** (Selective) - Only for complex business logic
- **Integration Testing** (Primary) - Testing user workflows and component interactions
- **E2E Testing** (Critical Paths) - Out of scope for this project

### Testing Guidelines
- Test at the port boundary - mock service adapters only
- Focus on user behavior and workflows
- Use `getByRole` over `getByText` for accessibility-first testing
- Never mock data fetching libraries (SWR, React Query)
- Never mock persistence layers (localStorage, IndexedDB)
- Test descriptions: "Should [expected behavior] when [user action/condition]"

## Form Development Guidelines

When creating forms:
- Use React Hook Form for form management
- Implement validations using Zod schemas from domain layer
- Use Shadcn components for UI
- Handle async data initialization with useEffect pattern
- Convert between strings and numbers for numeric fields in form controls

## SWR Data Fetching Pattern

For data fetching hooks:
- Export functions named `useGetX` (replace X with entity name)
- Use conditional fetching with `shouldFetch` variable
- Use path utilities for SWR keys
- Return SWR response object directly

## Service Layer Guidelines

- Each port gets its own file in services layer
- Use kebab-case for file names, PascalCase for ports, camelCase for functions
- All service adapters should return Result pattern for consistent error handling
- Create endpoints.ts for external API endpoints
- Use adapter pattern to transform between API responses and domain types

## Notes

- Project is focused on learning AI code agents
- Clean git repository state
- Comprehensive Cursor rules configured for architecture, testing, SWR hooks, and forms
