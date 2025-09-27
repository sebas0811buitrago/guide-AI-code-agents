# BMI Calculator Domain Layer Plan

Act as senior React developer, expert in ports and adapters architecture and in clear and clean code.

Architecture guidelines: you will find code examples and architecture guidelines here, TAKE A LOOK TO `.cursor/rules/architecture.mdc` before implementing anything

Follow the architecture and form standards guidelines to build the following feature:

**BMI Calculator Feature**: Create a BMI calculator with a form that calculates BMI, saves each calculation to local storage as history, and displays all previous calculations in a list. The records saved are only allowed to be viewed - you cannot update them or delete them.

Take the following steps:

Create the whole module in the @/modules/bmi-calculator module :

1. Create the domain layer, you will need 2 entities:

## BMI Calculation Entity

## BMI Body measurements Entity

```
<bmi-body-measurements>
  weight: number (required, min: 1, max: 1000)
  height:  number (required, min: 30, max: 300
</bmi-body-measurements>
```

```
<bmi-calculation>
  id: number (uuid)
  weight: <bmi-body-measurements.weight/>
  height:<bmi-body-measurements.height/>
  bmi: number (required, decimal places: 1) => calculated BMI value
  category: string (required, enum: ["Underweight", "Normal", "Overweight", "Obese"]) => BMI category classification
  calculatedAt: Date (required) => timestamp when calculation was performed

  ports: in the same entity file create ports for:
  - creating new BMI calculations
  - getting all BMI calculations from storage

  business logic: create a function to calculate BMI from weight and height (BMI = weight / (height/100)²)
  business logic: create a function to determine BMI category based on BMI value:
    - BMI < 18.5: "Underweight"
    - BMI 18.5-24.9: "Normal"
    - BMI 25-29.9: "Overweight"
    - BMI ≥ 30: "Obese"
</bmi-calculation-entity>
```
