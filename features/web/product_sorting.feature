@web
Feature: Sort products by name
    As a standard user
    I want to sort products by name

Scenario: Sort products by name A to Z
    Given I am on the SauceDemo login page
    When I log in as "standard_user" with password "secret_sauce"
    Then I should be on the Inventory page
    When I sort products by "Name (A to Z)"
    Then The products should be sorted in ascending order

Scenario: Sort products by name Z to A
    Given I am on the SauceDemo login page
    When I log in as "standard_user" with password "secret_sauce"
    Then I should be on the Inventory page
    When I sort products by "Name (Z to A)"
    Then The products should be sorted in descending order