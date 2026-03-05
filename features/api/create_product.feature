@api
Feature: Create New Product
    As a user 
    I want to create new product 
    and add it to the product list

Scenario: New product created successfully
    Given I have new product payload with title "New Test Product", description "Test product created by automation test", price 9.99 and brand "Test Brand"
    When I send POST request to "/products/add" with the product payload
    Then the response status code should be 201
    And the response should contain title "New Test Product"
    And the response should contain description "Test product created by automation test"
    And the response should contain price 9.99
    And the response should contain brand "Test Brand"
