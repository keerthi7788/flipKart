const { test, expect } = require('@playwright/test');
const axios = require('axios');
// const { expect } = require('chai');

test('Validate Amazon Search API Response Structure', async () => {
  const response = await axios.get('https://api.amazon.in/products/search?q=smartphone');
  
  // Status Code Validation
  expect(response.status).to.equal(200);

  // Response Structure Validation
  const product = response.data.data[0];
  expect(product).to.have.property('product_id');
  expect(product).to.have.property('name');
  expect(product).to.have.property('price');
  expect(product).to.have.property('stock_status');
  
  // Content Validation
  expect(product.name).to.be.a('string');
  expect(product.price).to.match(/₹\d+/);
});
