const { I } = inject();
const assert = require('assert');

let responseData;
let productPayload;
let storedProductData;
let responseTime;

// GET request

When('I send a GET request to {string}', async (endpoint: string) => {
    const response = await I.sendGetRequest(endpoint);
    responseData = response.data;
});

Then('the response status code should be {int}', (statusCode: number) => {
    I.seeResponseCodeIs(statusCode);
});

Then('the response should contain a list of products', () => {
    I.seeResponseContainsKeys(['products']);
    assert.ok(responseData.products.length > 0, 'Products array should not be empty');
});

Then('I print the titles of products with odd IDs', () => {
    const products = responseData.products;
    console.log(' === Products with odd IDs ===');
    products
        .filter((p: any) => p.id % 2 !== 0)
        .forEach((p: any) => {
            console.log(` ID ${p.id}: ${p.title}`);
        });
});

// POST request

Given('I have new product payload with title {string}, description {string}, price {float} and brand {string}',
    (title: string, description: string, price: number, brand: string) => {
        productPayload = {title, description, price,brand};
    }
);

When('I send POST request to {string} with the product payload', async(endpoint: string) => {
    const response = await I.sendPostRequest(endpoint, productPayload);
    responseData = response.data;
});

Then('the response should contain title {string}', (title: string) => {
    assert.strictEqual(responseData.title, title, `Expected title ${title} but got ${responseData.title}`);
});

Then('the response should contain description {string}', (description: string) => {
    assert.strictEqual(responseData.description, description, `Expected description ${description} but got ${responseData.description}`);
});

Then('the response should contain price {float}', (price: number) => {
    assert.strictEqual(responseData.price, price, `Expected price ${price} but got ${responseData.price}`);
});

Then('the response should contain brand {string}', (brand: string) => {
    assert.strictEqual(responseData.brand, brand, `Expected brand ${brand} but got ${responseData.brand}`);
});

// PUT request

Then('I store the response data', () => {
    //creates copy of responseData to compare later
    storedProductData = {...responseData};
});

When('I send a PUT request to {string} with title {string}', async(endpoint: string, title: string) => {
    const response = await I.sendPutRequest(endpoint, {title});
    responseData = response.data;
});

Then('the response should contain original product data', () => {
    assert.strictEqual(storedProductData.description, responseData.description, `Expected description ${storedProductData.description} but got ${responseData.description}`);
    assert.strictEqual(storedProductData.price, responseData.price, `Expected price ${storedProductData.price} but got ${responseData.price}`);
    assert.strictEqual(storedProductData.brand, responseData.brand, `Expected brand ${storedProductData.brand} but got ${responseData.brand}`);
});

// Performance with delay

When('I send GET request to {string} and measure response time', async(endpoint: string) => {
    const startTime = Date.now();
    const response = await I.sendGetRequest(endpoint);
    responseTime = Date.now() - startTime;
})

Then('the response time should be less than {int} miliseconds', (maxTime: number)=> {
    assert.ok(responseTime < maxTime, `Response time ${responseTime} is longer than ${maxTime} ms `);
})