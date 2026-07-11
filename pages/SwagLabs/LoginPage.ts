import { Locator, Page } from "@playwright/test";
import { loginData } from "../../testdata/loginData";
import { InventoryPage } from "./InventoryPage";

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
    async enterUsername() {
        await this.username.fill(loginData.username);
    }
    async enterPassword() {
        await this.password.fill(loginData.password);
    }
    async clickLoginButton() {
        await this.loginBtn.click()
        return new InventoryPage(this.page)
    }
}