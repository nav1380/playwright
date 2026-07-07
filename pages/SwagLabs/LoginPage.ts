import { Locator, Page } from "@playwright/test";

export class LoginPage {

    private readonly page: Page;
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginBtn = page.locator("[data-test='login-button']");
    }
    async goToSite() {
        await this.page.goto("https://www.saucedemo.com/");
    }
    async enterUsername(username: string) {
        await this.username.fill(username);
    }
    async enterPassword(password: string) {
        await this.password.fill(password);
    }
    async clickLoginButton() {
        await this.loginBtn.click()
    }
}