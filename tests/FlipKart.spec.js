const { test, expect } = require('@playwright/test');

test('verify the search product from flipkart', async ({ page }) => {
  await page.goto('https://www.flipkart.com')

  // Expect a title "to have title"
  await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
//   search for the product
 const product=await page.getByPlaceholder("Search for Products, Brands and More")
 await product.fill("taitan")
 await page.keyboard.press('Enter')
 //  captiring product name,price,link
    // const products = await page.$$eval("//div[starts-with(@class,'_75nlfW LYgYA3')]//div[@data-id]", item => {
      await page.waitForLoadState('networkidle');
  
      const products = await page.locator("//div[starts-with(@class,_75nlfW LYgYA3')]", item => {
      return items.map(item => {
    
      console.log(products)
        const name = item.querySelector("/div[starts-with(@class,'_75nlfW LYgYA3')]//div[@data-id]//a[@title]").textContent()
        console.log(name)
          const price = item.querySelector("//div[starts-with(@class,'_75nlfW LYgYA3')]//div[@data-id]//div[starts-with(text(),'₹')]").textContent()
        console.log(price)
        const link = item.querySelector('a').textContent()
        console.log(link)
        return { name, price, link }

    });
  })
      console.log(`Product ${index + 1}:`);
      console.log(`Name: ${product.name}`);
      console.log(`Price: ${product.price}`);
      console.log(`Link: ${product.link}`);
  
  
  // })

  
})
// Navigate to Add to cart screen

test('verify the ', async ({ page }) => {
  await page.goto('https://www.flipkart.com')
  const product=await page.getByPlaceholder("Search for Products, Brands and More")
  await product.fill("taitan")
  await page.keyboard.press('Enter')
  await page.waitForLoadState('networkidle');
  const page2Promise = page.waitForEvent('popup');
  //■ Select the first product from the search results.
  await page.locator('.rPDeLR').first().click();
  const page2 = await page2Promise;
  // Navigate to the "Add to Cart" screen.
  await page2.getByRole('button', { name: 'Buy Now' }).click();
  //navigate  to buy now screen
  await page2.getByRole('textbox').click();
  await page2.getByRole('textbox').fill('6362732746');
  await page2.getByRole('button', { name: 'CONTINUE' }).click();
  await page2.getByRole('button', { name: 'Deliver Here' }).click();
  await page2.getByRole('button', { name: 'CONTINUE' }).click();
  //○ Navigate to the Payment Gateway Screen:
  await page2.locator('label').filter({ hasText: 'UPIPay by any UPI app' }).locator('div').first().click();
  await page2.locator('label').filter({ hasText: /^PhonePe$/ }).locator('div').first().click();
  await page2.getByRole('button', { name: 'CONTINUE' }).click();
  await page2.getByRole('button', { name: 'Place Order' }).click();
 

 })
