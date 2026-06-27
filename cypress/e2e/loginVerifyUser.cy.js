import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

describe ("Login with valid user", () => {
    it ("should login with valid user", () => {

        loginPage.acessLoginPage();

        loginPage.clickLoginButton();

        // wait for modal and sign in button to be visible
        cy.get('[data-cy="signInButton"]').should('be.visible');

        // Check the login with valid user credentials from seed file
        loginPage.loginWithValidUser("admin@test.com", "test123");
        // submit form by clicking the Sign in button
        loginPage.clickSignInButton();
    })
})

    describe ("Login with invalid user", () => {
        it ("should not login with invalid user", () => {

            loginPage.acessLoginPage();
            loginPage.clickLoginButton();

            // wait for modal and sign in button to be visible
            cy.get('[data-cy="signInButton"]').should('be.visible');

            // Check the login with invalid user credentials
            loginPage.loginWithInvalidUser("test@@@.@", "000000000")

            //Submit form by clicking the Sign in Button
            loginPage.clickSignInButton();

            // Check if there is an error message displayed
            cy.get('.text-red-500').should('be.visible');

        })
    })
