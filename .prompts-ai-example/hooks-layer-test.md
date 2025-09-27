# Testing Hooks Layer Prompt Generator

## Test Requirement

"I need a hook to fetch all patient appointments for a specific doctor, and also a hook to get details of a single appointment by its ID"

## Generated Prompt (using hooks-layer-prompt-generator.mdc)

@swr-hook.mdc => reference this cursor rule

## 🔗 Data Fetching Hook Implementation

### Hook Requirements

- **Entity**: Appointment collection and single Appointment
- **Operation**: GET collection by doctor ID, GET single by appointment ID
- **Dependencies**: Doctor ID (required), Appointment ID (required for single)
- **Caching Strategy**: Standard SWR with revalidation for collections, SWRImmutable for single items

### Implementation Specifications

- Hooks named `useGetDoctorAppointments` and `useGetAppointment` following convention
- Collection hook accepts `doctorId` as required parameter
- Single hook accepts `appointmentId` as required parameter
- Both use conditional fetching when IDs are present
- Return standard SWR response objects

<hook-signature>
Create hooks:
- `useGetDoctorAppointments(doctorId: string)` for fetching doctor's appointments
- `useGetAppointment(appointmentId: string)` for fetching single appointment details
</hook-signature>

<swr-key>
Use keys:
- "GET_APPOINTMENTS_BY_DOCTOR" with doctor ID for appointments collection
- "GET_APPOINTMENT_BY_ID" with appointment ID for single appointment
</swr-key>

<fetcher-integration>
Integrate with service functions that:
- `getDoctorAppointments(doctorId)` - accepts doctorId, returns appointment array
- `getAppointmentById(appointmentId)` - accepts appointmentId, returns single appointment
- Both handle API errors appropriately and return properly typed data
</fetcher-integration>

<conditional-logic>
Implement shouldFetch logic:
- For collection: only fetch when doctorId is provided and not null/undefined
- For single: only fetch when appointmentId is provided and not null/undefined
</conditional-logic>

## ❓ Clarification Questions

- Should the appointments collection support date range filtering?
- Are there status filters needed (upcoming, completed, cancelled)?
- Should appointment details include related patient information?
- Do you need real-time updates for appointment changes?
- Should the collection hook support pagination for doctors with many appointments?
