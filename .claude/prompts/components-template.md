# 🎨 Components Layer Prompt Generator

## 📋 Purpose

This rule analyzes user requirements and generates comprehensive, structured prompts for implementing UI components based on existing domain, service, and hook layers, following the established design system and form conventions.

## 🎯 Usage Instructions

When a user provides a requirement for component implementation, generate a prompt following this structure:

### 1. 📖 Requirement Analysis

- Identify the main UI components needed
- Determine form requirements and input types
- Assess data display and interaction patterns
- Identify design system components to use

### 2. 🧩 Component Implementation Plan

Generate prompt sections using this template:

```markdown
## 🎨 Component Layer Implementation

### Reference Guidelines

- .cursor/rules/architecture-guidelines.mdc => reference this cursor rule
- .cursor/rules/forms-guide.mdc => reference this cursor rule
- [module-path] => reference this module folder

### Component Requirements

Using as a base all of the already created layers (domain, hooks, services), create the component layer for the [feature-name].

[Include visual guide reference if applicable]
Use as a guide the attached image or figma link in in case it was provided, and the reference guides.

### Components Structure

<main-components>
[List primary components with detailed specifications]

1. [Component Name]: [Brief description]
   - [Detailed requirements and functionality]
   - [Form fields, inputs, validation requirements]
   - [User interactions and behavior]
2. [Component Name]: [Brief description]
   - [Data display requirements]
   - [Layout and visual structure]
   - [State management considerations]

[Additional components as needed]
</main-components>

<design-system-usage>
Make sure to use the system design components available at atoms-ui package.

Key components to consider:

- Form components (Input, Button, Select, etc.)
- Layout components (Container, Card, Grid, etc.)
- Data display components (Table, List, etc.)
- Feedback components (Toast, Modal, Loading, etc.)
  </design-system-usage>

<additional-considerations>
Additional considerations:
- [Specific component preferences, e.g., "Use Container component instead of Card component"]
- [Form initialization requirements, e.g., "Initialize form fields with undefined values"]
- [Accessibility requirements]
- [Responsive design considerations]
- [Performance considerations]
</additional-considerations>

## ❓ Clarification Questions

[Generate specific questions about unclear requirements]
```

## 🎨 Style Guidelines

### Formatting Rules:

- Use emojis for main section headers
- Use `<section-name>` tags for implementation areas
- Reference architecture and forms guide rules at the top
- Include module folder path reference
- Maintain clear bullet point structure for component specs

### Content Focus:

- **Include**: Component structure, form requirements, data display patterns, design system usage
- **Exclude**: Specific code implementations, detailed syntax
- **Emphasize**: User interactions, visual design, form validation, data flow

### Component Categories:

Generate prompts for these component types:

#### Form Components

- Input forms with validation
- Multi-step forms
- Search and filter forms
- Configuration forms

#### Data Display Components

- Lists and tables
- Cards and tiles
- Charts and visualizations
- Detail views

#### Interactive Components

- Navigation elements
- Action buttons and controls
- Modals and dialogs
- Drag and drop interfaces

#### Layout Components

- Page layouts
- Section containers
- Responsive grids
- Dashboard layouts

### Question Generation:

Always end with clarification questions about:

- Visual design preferences and layout
- Form validation requirements
- User interaction patterns
- Responsive behavior needs
- Accessibility requirements
- Performance considerations

## 🔍 Example Prompt Structure

For a requirement like "Create Books searcher":

```markdown
.cursor/rules/architecture-guidelines.mdc => reference this cursor rule
.cursor/rules/forms-guide.mdc => reference this cursor rule
apps/ai-examples/src/books-searcher => reference this module folder

Using as a base all of the already created layers (domain, hooks, services), create the component layer for the Books searcher.

Use as a guide the attached image or figma link in in case it was provided, and the reference guides.

Components:

1. The left side shows a search form with inputs for title, author, genre, and publication year. When clicking the search button, the search should be executed through the book search service. Take into account to initialize the form fields with undefined values

2. In the right side you have the search results where books matching the criteria are displayed, in each card are shown the book title, author, genre, publication year, and cover image. Include functionality to save books to favorites through the save favorite book service

Make sure to use the system design components available at atoms-ui package.

Additional considerations: - Use the Container component instead of the Card component
```

## 🏗️ Component Architecture Patterns

### Component Organization:

- **Page Components**: Top-level route components
- **Feature Components**: Business logic containers
- **UI Components**: Pure presentation components
- **Form Components**: Form-specific logic and validation

### State Management Patterns:

- **Form State**: React Hook Form integration
- **Server State**: SWR hooks integration
- **Local State**: Component-specific useState
- **Global State**: Context providers when needed

### Data Flow Patterns:

- **Props Down**: Data flows from parent to child
- **Events Up**: User actions bubble up via callbacks
- **Hook Integration**: Custom hooks for data fetching
- **Service Integration**: Business logic through services

## ✅ Success Criteria

Generated prompts should:

- Reference architecture and forms guide rules explicitly
- Specify module folder path for implementation
- Provide clear component specifications with user requirements
- Include design system component usage guidelines
- Specify form initialization and validation requirements
- Include data display and interaction patterns
- Generate relevant clarification questions about UI/UX details

## 🔄 Component Types Supported

### Form-Heavy Components

- Data input forms with validation
- Multi-step wizards
- Search and filter interfaces
- Settings and configuration panels

### Data-Heavy Components

- Tables with sorting and filtering
- Dashboard with charts and metrics
- Lists with pagination
- Detail views with related data

### Interactive Components

- Real-time updating interfaces
- Drag and drop functionality
- Modal workflows
- Navigation and routing

### Layout Components

- Responsive page layouts
- Sidebar and header structures
- Grid and flex containers
- Responsive breakpoint handling
