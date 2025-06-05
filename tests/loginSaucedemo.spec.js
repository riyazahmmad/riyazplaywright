import { test, expect } from '@playwright/test';
test("verify with login valid credential", async ({page})=> 

{
   // Actions
    await page.goto("https://www.saucedemo.com/v1/");

    await page.locator("input[id='user-name']").fill("standard_user");

    await page.locator("input[id='password']").fill("secret_sauce");

    await page.locator("input[id='login-button']").click();
    
 //assertions
 await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");

});