class CreateNewHeroes {

  selectorsList () {

    const selectors = {

        createButton : cy.contains("Create New Hero"),
        nameField: 'data-cy="nameInput"',
        priceField: 'data-cy="priceInput"',
        fansField: 'data-cy="fansInput"',
        savesField: 'data-cy="savesInput"',
        powersOptions: 'data-cy="powersSelect"',
        avatarImage: 'data-cy="avatarFile"',
        submitButton: '[data-new-gr-c-s-check-loaded="14.1304.0"]'
    }



    return selectors;
   }
}