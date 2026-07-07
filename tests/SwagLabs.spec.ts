// import { test, expect } from "@playwright/test";
// import { InventoryPage } from "../pages/InventoryPage";
// import { LoginPage } from "../pages/LoginPage";

// test("Verify whether the added items are in the Cart", async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const inventoryPage = new InventoryPage(page);

//   await loginPage.goToSite();
//   await loginPage.enterUsername("standard_user");
//   await loginPage.enterPassword("secret_sauce");
//   await loginPage.clickLoginButton();

//   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

//   await inventoryPage.backpackAddToCart();
//   await inventoryPage.bikeLightAddToCart();
//   await inventoryPage.goToCartPage();

//   const expectedProducts = [
//     "Sauce Labs Backpack",
//     "Sauce Labs Bike Light"
//   ];

//   for (let i = 0; i < expectedProducts.length; i++) {
//     const actualProducts = page.locator('.inventory_item_name')
//     await expect(actualProducts.nth(i)).toHaveText(expectedProducts[i]);
//   }
// });
