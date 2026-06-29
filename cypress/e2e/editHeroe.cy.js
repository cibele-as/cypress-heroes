import LoginPage from "../pages/loginPage";
import ListHeroesPage from "../pages/listHeroes";
import EditHeroe from "../pages/editHeroe";

const loginPage = new LoginPage();
const listHeroesPage = new ListHeroesPage();
const editHeroe = new EditHeroe();

describe ("Edit a hero after login", () => {
   it ("should edit a hero after löogin", () => {{

    // Access the login page and click the login button
        loginPage.acessLoginPage();
        loginPage.clickLoginButton();

    // Wait for the modal and sign-in button to be visible
    cy.get('[data-cy="signInButton"]').should('be.visible');
    
    // Login with valid user credentials
    loginPage.loginWithValidUser("admin@test.com", "test123");

    // Submit the form by clicking the Sign in Button
    loginPage.clickSignInButton();

    //Click the "Edit" button for the hero "Test Hero" to open the edit form
    cy.contains("Test Hero").parent().find(editHeroe.selectorsList().editButton).click();

    // Clear the existing values data in the form fields and enter new values
    cy.get(editHeroe.selectorsList().nameField).clear().type("Test Hero edited");
    cy.get(editHeroe.selectorsList().priceField).clear().type("300");

    // Submit the form by clicking the "Submit" button
    cy.contains('button', 'Submit').click();

    // Check if the edited hero is displayed in the list after editing
    cy.get(listHeroesPage.selectorsList().listHeroes).should('contain', 'Test Hero edited');



   }})

})