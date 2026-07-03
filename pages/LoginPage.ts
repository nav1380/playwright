import { Page } from "@playwright/test";

export class LoginPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToSite() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async enterUsername(username: string) {
        await this.page.locator("#user-name").fill(username);
    }

    async enterPassword(password: string) {
        await this.page.locator("#password").fill(password);
    }

    async clickLoginButton() {
        await this.page.locator("[data-test='login-button']").click()
    }

}