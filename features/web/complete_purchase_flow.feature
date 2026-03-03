@web
Feature: Complete purchase flow
    As a standard user
    I want to add items to my cart and complete purchase

Scenario: Standard user complete purchase flow
    Given I am on the SauceDemo login page
    When I log in as "standard_user" with password "secret_sauce"
    Then I should be on the Inventory page
    When I add all items to the cart
    And I go to the shopping cart
    Then I should be on the shopping cart
    And I should see 6 items in the cart
    When I remove item 3 from the cart
    Then I should see 5 items in the cart
    When I proceed to checkout
    And I fill with checkout information with first name "John" last name "Smith" and postal code "12345"
    And I continue the checkout
    Then I should see 5 items in the checkout overview
    And The checkout overview should contain correct items
    When I finish the purchase
    Then I should see confirmation message