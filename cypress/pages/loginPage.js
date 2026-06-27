class LoginPage {
    selectorsList() {
        const selectors = {
            loginButton: cy.contains("Login"),
            emailField: '[data-cy="email"]',
            passwordField: '[data-cy="password"]',
            signInButton: '[data-cy="signInButton"]',
            errorInvalidUser: '.text-red-500'

        };

        return selectors;
    }

    acessLoginPage() {
        cy.visit("http://localhost:3000/heroes");

    }

    // Click login button

    clickLoginButton() {
        cy.contains("Login").click();
    }


    // Check login with valid user
    loginWithValidUser(email, password) {

        cy.get(this.selectorsList().emailField).type(email);
        cy.get(this.selectorsList().passwordField).type(password);

    }
    // Click sign in button
   clickSignInButton() {
     cy.get('[data-cy="signInButton"]').click();

   }

   // Check login with invalid user
    loginWithInvalidUser(email, password) {
        cy.get(this.selectorsList().emailField).type(email);
        cy.get(this.selectorsList().passwordField).type(password);
    }


}
export default LoginPage;