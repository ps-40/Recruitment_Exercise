const { I, loginPage } = inject();

Given('I am on the SauceDemo login page', () => {
    I.amOnPage('/')
});

When('I log in as {string} with password {string}', (username: string, password: string) => {
    loginPage.login(username, password);
})

Then('I should see error message containing {string}', (errorText: string) => {
    loginPage.seeError(errorText);
})


