@api
Feature: Get All Products List
    As a user 
    I want to retrieve list of all products
    So I can see product information

Scenario: Get all products list
    When I send a GET request to "/products"
    Then the response status code should be 200
    And the response should contain a list of products
    And I print the titles of products with odd IDs
