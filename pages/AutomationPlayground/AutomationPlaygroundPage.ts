import { Locator, Page } from "@playwright/test";
import { AutomationPlaygroundFormsPage } from "./AutomationPlaygroundFormsPage";
import { AutomationPlaygroundMouseActionsPage } from "./AutomationPlaygroundMouseActionsPage";

export class AutomationPlaygroundPage{

    private readonly page: Page;
    private readonly formsPageBtn: Locator;
    private readonly mouseActionsBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formsPageBtn = page.locator('[href="forms.html"]');
        this.mouseActionsBtn = page.locator('[href="mouse_events.html"]')
    }

    async goToPage() {
        await this.page.goto('https://play1.automationcamp.ir/index.html')
    }

    async goToFormsPage() {
        await this.formsPageBtn.click()
        return new AutomationPlaygroundFormsPage(this.page)
    }

    async goToMouseActionsPage() {
        await this.mouseActionsBtn.click()
        return new AutomationPlaygroundMouseActionsPage(this.page)
    }
}