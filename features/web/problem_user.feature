@web
Feature: Problem user purchase
    As a problem user
    I want to add particular item to the cart
    So I can validate cart functionality despite know issue

# problem_user has intentional UI defects: wrong product opens, add to cart broken
Scenario: Problem user add item to the cart
    Given I am on the SauceDemo login page
    When I log in as "problem_user" with password "secret_sauce"
    Then I should be on the Inventory page
    When I click on "Sauce Labs Backpack" item
    Then I should be on item details page for "Sauce Labs Backpack"
    When I add item to the shopping cart from the item details page
    And I go to the shopping cart
    Then I should see "Sauce Labs Backpack" in the cart