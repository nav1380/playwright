import { Locator, Page } from "@playwright/test";

export class AutomationPlaygroundMouseActionsPage {

    private readonly page: Page;
    private readonly hoverBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hoverBtn = page.getByRole('button', { name: "Choose Language" })
    }

    languageHoverBtn() {
        return this.hoverBtn;
    }

}