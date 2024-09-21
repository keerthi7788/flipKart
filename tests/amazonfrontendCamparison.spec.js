const { test, expect } = require('@playwright/test');
const axios = require('axios');

test('Compare Frontend and API Data for Product Name and Price', async ({ page }) => {
  // Step 1: Navigate to Amazon product listing page
  await page.goto('https://www.amazon.in/s?k=smartphone');

  // Step 2: Extract product details from the frontend
  const productNameFrontend = await page.textContent('.s-title'); 
  const productPriceFrontend = await page.textContent('.s-price');
  
  // Step 3: Fetch product details from API
  const response = await axios.get('https://api.amazon.in/products/search?q=smartphone');
  const product = response.data.data[0];

  // Step 4: Compare frontend and API data
  expect(product.name.trim()).to.equal(productNameFrontend.trim());
  expect(product.price).to.equal(productPriceFrontend.trim());
});
