import { Page } from "@playwright/test";
import { AutomationPlaygroundFormsPage } from "./AutomationPlaygroundFormsPage";

export class AutomationPlaygroundPage{

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToPage() {
        await this.page.goto('https://play1.automationcamp.ir/index.html')
    }

    async goToFormsPage() {
        await this.page.locator('[href="forms.html"]').click()
        return new AutomationPlaygroundFormsPage(this.page)
    }

}