---
description: Service Layer Prompt Generator - Creates structured prompts for building service layers based on requirements
globs: ["**/*"]
alwaysApply: false
---

# 🔧 Service Layer Prompt Generator

## 📋 Purpose

This rule analyzes user requirements and generates comprehensive, structured prompts for implementing service layers following the ports and adapters architecture pattern.

## 🎯 Usage Instructions

When a user provides a requirement for external service integration, generate a prompt following this structure:

### 1. 📖 Context Analysis

- Identify the external service/technology involved
- Determine data persistence requirements
- List the main operations needed
- Identify any special considerations

### 2. 🏗️ Service Layer Structure

Generate prompt sections using this template:

```markdown
## 🔌 External Service Integration

### Technology Stack

- **Primary Service**: [Service name and version]
- **Authentication**: [Auth method if applicable]
- **Data Format**: [JSON, XML, etc.]
- **Transport**: [HTTP, WebSocket, etc.]

### Service Requirements

- [List main service operations]
- [Data transformation needs]
- [Error handling considerations]

## 📡 Service Implementation Plan

Architecture guidelines : you will find code examples and architecture guidelines here, TAKE A LOOK TO `.cursor/rules/architecture.mdc` before implementing anything

<endpoints>
[Instructions for endpoint definitions and URL patterns]
</endpoints>

<interfaces>
[Instructions for response and request interface definitions]
</interfaces>

<adapters>
[Instructions for adapter pattern implementation]
- Service function requirements
- Adapter function requirements  
- Data transformation specifications
- Port implementation guidelines
</adapters>

<persistence>
[Instructions for local storage, caching, or other persistence needs if applicable]
</persistence>

## ❓ Clarification Questions

[Generate specific questions about unclear requirements]
```

## 🎨 Style Guidelines

### Formatting Rules:

- Use emojis for main section headers
- Use `<section-name>` tags for implementation areas
- Maintain clear bullet point structure
- Include technology specifications upfront
- Reference architecture guidelines at the top

### Content Focus:

- **Include**: Service types, data flow, integration patterns, architectural decisions
- **Exclude**: Specific code implementations, detailed syntax, step-by-step coding instructions
- **Emphasize**: Business requirements, external service characteristics, data transformation needs

### Question Generation:

Always end with clarification questions about:

- API endpoints or service URLs
- Authentication requirements
- Data formats and schemas

## 🔍 Example Prompt Structure

For a requirement like "Integrate weather API for location-based forecasts":

```markdown
@architecture-guidelines.mdc => reference this cursor rule

## 🔌 External Service Integration

### Technology Stack

- **Primary Service**: Weather API (OpenWeatherMap/AccuWeather)
- **Authentication**: API Key
- **Data Format**: JSON
- **Transport**: REST HTTP

### Service Requirements

- Fetch current weather by location
- Retrieve 5-day forecast data
- Handle geolocation coordinates
- Cache weather data for performance

<endpoints>
Define endpoints for current weather and forecast data with location parameters
</endpoints>

<interfaces>
Create response interfaces matching the weather service data structure and request interfaces for location parameters
</interfaces>

<adapters>
Implement adapters for:
- Current weather retrieval service
- Forecast data service  
- Location-based data transformation
- Weather data normalization for domain entities
</adapters>

## ❓ Clarification Questions

- Which weather service provider should be used?
- What location input formats are required (coordinates, city names, zip codes)?
- How long should weather data be cached?
- Are there specific weather metrics needed beyond temperature?
```
