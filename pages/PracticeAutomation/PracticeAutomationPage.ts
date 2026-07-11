import { Page } from "@playwright/test";

export class PracticeAutomationPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToSite() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/?utm_source=chatgpt.com')
    }

    

}