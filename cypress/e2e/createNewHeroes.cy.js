import LoginPage from "../pages/loginPage";
import ListHeroesPage from "../pages/listHeroes";

const loginPage = new LoginPage();
const listHeroesPage = new ListHeroesPage();

describe ("Create a new hero", () => {
    it ("should create a new hero after login", () => {
     
        loginPage.acessLoginPage();
        loginPage.clickLoginButton();

        // wait for modal and sign in button to be visible
        cy.get('[data-cy="signInButton"]').should('be.visible');

        // Login with valid user credentials
        loginPage.loginWithValidUser("admin@test.com", "test123");

        // Submit form by clicking the Sign in button
        loginPage.clickSignInButton();

        //Click the "Create New Hero" button to open the form
        cy.contains("Create New Hero").click();

        // Enter with valid data in the form fields
        cy.get('[data-cy="nameInput"]').type("Test Hero");
        cy.get('[data-cy="priceInput"]').type("100");
        cy.get('[data-cy="fansInput"]').type("1000");
        cy.get('[data-cy="savesInput"]').type("500");
        cy.get('[data-cy="powersSelect"]').select("Invisibility");
        cy.get('[data-cy="avatarFile"]').selectFile('cypress/fixtures/avatar/test-avatar.jpg', { force: true });

        // Submit the form by clicling the "Submit" button
        cy.contains('button', 'Submit').click();

        // Check if the new hero is displayed in the list after creation
        cy.get (listHeroesPage.selectorsList().listHeroes).should('contain', 'Test Hero');




    })
})