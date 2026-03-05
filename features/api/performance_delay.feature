@api
Feature: API performance with delay parameter
    As an API user
    I want to verify that API responds with acceptable time
    So I can ensure performance requirements are met

Scenario Outline: API response time with delay parameter
    When I send GET request to "/products/?delay=<delay>" and measure response time
    Then the response status code should be <expectedStatus>
    And the response time should be less than 1000 miliseconds

    Examples:
        | delay | expectedStatus |
        | 0     | 200            |
        | 5000  | 200            |
        | 6000  | 200            |

  # delay=5000 exceeds 1000 ms time threshold - the test fails
  # 6000 expects 200 but API rejects delays over 5000ms with 400 - the test fails


