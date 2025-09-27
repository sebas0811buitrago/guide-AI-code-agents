.cursor/rules/architecture-guidelines.mdc => reference this cursor rule
.cursor/rules/forms-guide.mdc => reference this cursor rule
apps/ai-examples/src/bmi-calculator => reference this module folder

Using as a base all of the already created layers (domain, hooks, services), create the component layer for the BMI calculator .

Use as a guide the attached image, and the forms-guide.mdc cursor rule.

Components :

1. The left side the image show a form with weight and heigh as inputs, and when clicking the calculate BMI the BMI record should be shown in saved in through th save bmi record service. Take into account to initialize the form fields with undefined values

2. in the right side you have the BMI history where are loaded the previous BMI calculations, in each card are shown the BMI, the category (e.g : "obese") and the body measurements

Make sure to use the system design components available at atoms-ui package.

Additional considerations : - Use the Container component instead of the Card component
