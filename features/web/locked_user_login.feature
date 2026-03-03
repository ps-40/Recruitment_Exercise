@web
Feature: Locked Out User Authentication Failure
    As a locked out user
    I want to see an appropriate error message when I try to log in

Scenario: Logged out user cannot loggin
    Given I am on the SauceDemo login page
    When I log in as "locked_out_user" with password "secret_sauce"
    Then I should see error message containing "Sorry, this user has been locked out."