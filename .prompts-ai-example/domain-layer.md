@architecture-guidelines.mdc => reference this cursor rule

Act as senior React developer, expert in ports and adapters architecture and in clear and clean code.

Follow the architecture and form standards guidelines to build the following feature:

I need to create a BMI calculator and save the calculation in the local storage as a historical of records that user has submitted.

Take the following steps:

Create the whole module in the @/bmi-calculator module in the @/ai-examples app

1. Create the domain layer, you will need two entities:

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

Ask follow up questions if you are not sure of something, do not make guesses
