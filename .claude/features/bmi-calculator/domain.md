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

<body-measurement-entity>
  field : weight  (required, min value 1, max value 200) => the unit is in kg
  field : height (required, min value 20, max 300) => the unit it is in cm
</body-measurements-entity>

<bmi-record-entity>
  id : (required)
  field : weight  (required, min value 1, max value 200) => the unit is in kg
  field : height (required, min value 20, max 300) => the unit it is in cm
  field : bmi (required, min value 0)
  ports: in the same entity file create ports for saving a bmi record, getting all bmi records, deleting all the records, and deleting one record by id.

business logic: create a function with the logic to calculate the bmi, for the calculation take into account that the weight it is in kilograms and the height in centimeters

business logic: create a function that transforms the bmi to a category "under Weight", "normalWeight", "overWeight" or "obese"
</body-measurements-entity>
