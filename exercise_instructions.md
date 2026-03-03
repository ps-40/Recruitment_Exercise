Introduction:
Please prepare for us the test scenarios / validations described below using typescript and tools: playwright and codeceptJS . We would like you to use gherkin in the task, as our tests are written using this tool. If you would like to add any scenarios from yourself beyond what we have prepared in the task, feel free to do this. 
We use: CodeceptJS (https://codecept.io/), Typescript, Playwright, and REST helpers, Allure Report.
You will earn extra points for using what we do, but that's not mandatory.
Feel free to use any programming language and test automation frameworks you prefer.
Tools/Reference:
    • TypeScript: JavaScript With Syntax For Types. (typescriptlang.org)
    • Fast and reliable end-to-end testing for modern web apps | Playwright
    • CodeceptJS
    • Gherkin Syntax - Cucumber Documentation

Assessment consists of two parts: 
Web (UI) and API automation. Please create a framework(s) for automation of such a tests and revert us back with:
- link to repo with completed task (code) or zip format;
- instruction how we can install everything needed;
- instruction how we can execute the tests and examine the results;
- proof of the execution by your side (e.g. screenshot with results);

You can code them either as a one, containing separate suites for API and WEB, or as two completely isolated frameworks.
It would be awesome to receive brief explanation why particular approach was selected.
Please do not leave unused / not working code, follow DRY principle, and add documentation where necessary. It will dramatically ease work of a reviewer.


**Web Automation tests to implement**
Test website is: https://www.saucedemo.com/
Scenario_1
1. Log in as a `standard user`
2. Add all item to the cart
3. Go to the cart
4. Find third item and remove it from the cart
5. Validate in the Checkout Overview that it only contains the items that you want to purchase, as well as the total count of items
6. Finish the purchase
7. Validate that the website confirms the order

Scenario_2
1. Log in as a `problem_user`
2. Find one item by name, click on the item
3. Add it to the cart from item page
4. Go to the cart
5. Validate that item was added

Scenario_3:
1. Log in as a `standard user`
2. Sort products by name
3. Validate that items sorted as expected

Scenario_4:
1. Log in as a `locked_out_user`
2. Validate that login failed



**HTTP API Automation tests to implement**

Documentation is available here: https://dummyjson.com/docs

Scenario_1
    1. Get a list of all products
    2. Validate that request was successful
    3. Print titles of products with odd ID numbers to console or to test report

Scenario_2
    1. Create a new product with required properties: title, description, price, brand
    2. Validate that the creation was successful
    3. Validate response data

Scenario_3
    1. Get data for third product
    2. Update third product
    3. Validate that the update was successful
    4. Validate that the response data matches the product data from step 1 where applicable

Scenario_4
1. Write a parametrized test for values [0, 5000, 6000]
2. Get a list of products passing ‘delay’ query parameter with the parametrized value
3. Validate that the request was successful
4. Validate that the response time is no longer than `1000` milliseconds
