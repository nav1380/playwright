import { Page } from "@playwright/test";

export class InventoryPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async backpackAddToCart() {
        await this.page.locator("#add-to-cart-sauce-labs-backpack").click();
    }

    async bikeLightAddToCart() {
        await this.page.locator("#add-to-cart-sauce-labs-bike-light").click();
    } 

    async goToCartPage() {
        await this.page.locator("[data-test='shopping-cart-link']").click()
    }

}