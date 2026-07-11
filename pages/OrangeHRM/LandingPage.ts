import { Page } from "@playwright/test";
import { loginData } from "../../testdata/loginData";
import { DashboardPage } from "./DashboardPage";

export class LandingPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToSite() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async loginToSite() {
        await this.page.getByRole('textbox', { name:"Username" }).fill(loginData.username)
        await this.page.getByRole('textbox', { name:"Password" }).fill(loginData.password)
        await this.page.getByRole('button', { name: "Login" }).click()
        return new DashboardPage(this.page)
    }

}