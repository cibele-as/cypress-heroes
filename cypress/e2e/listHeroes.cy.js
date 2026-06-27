import LoginPage from "../pages/loginPage";
import ListHeroesPage from "../pages/listHeroes";

const loginPage = new LoginPage();
const listHeroesPage = new ListHeroesPage();

describe ("List heroes page after login", () => {
    it ("should list heroes after login", () => {
       
        loginPage.acessLoginPage();
        loginPage.clickLoginButton();

        // wait for modal and sign in button to be visible
        cy.get('[data-cy="signInButton"]').should('be.visible');

        // Check the login with valid user credentials
        loginPage.loginWithValidUser("admin@test.com", "test123");
        
        // Submit form by clicking the Sign in button
        loginPage.clickSignInButton();

        //Check if the heroes list is displayed after login
        cy.get (listHeroesPage.selectorsList().listHeroes).should('be.visible');

    })

})    

