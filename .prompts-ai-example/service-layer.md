@architecture-guidelines.mdc => reference this cursor rule

2. Service layer:

<local-storage>
in the service layer create a separate file with methods to manipulate the local storage (this will be the persistence layer, here all the bmi-records will be saved). The local storage records should have different interfaces than the ones declared in the domain to simulate decoupling form the two layers, use the same name of the field but with snake_case, don't store additional metadata like createdAt or updatedAt, create the id of the records with crypto.randomUUID() .

Create only a method to retrieve the list of all bmi records saved, another one to delete all the records, and the final one to delete an specific record.
<local-storage>

<services>
After creating the local storage handle, create 4 services according to the ports created in the domain

- ignore the directive to create an endpoints file, since the service for getting the data won't be and api but the local storage.
- ignore the error handler adapter since it does not apply to this case.
- remember to do the data transformation from the layer contract to the domain contract in the adapter service.

Ask follow up questions if you are not sure of something, do not make guesses
</services>
