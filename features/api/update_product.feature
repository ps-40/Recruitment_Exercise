@api
Feature: Update Exisitng Product
    As a user
    I want to update third product
    So that its information reflect the latest changes

Scenario: Update 3rd product successfully
    When I send a GET request to "/products/3"
    Then the response status code should be 200
    And I store the response data
    When I send a PUT request to "/products/3" with title "Updated title"
    Then the response status code should be 200
    And the response should contain title "Updated title"
    And the response should contain original product data