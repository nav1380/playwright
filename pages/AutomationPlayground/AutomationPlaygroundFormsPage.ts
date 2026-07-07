import { Locator, Page } from "@playwright/test";

export class AutomationPlaygroundFormsPage {
  private readonly page: Page;
  private readonly placeholder: Locator;

  constructor(page: Page) {
    this.page = page;
    this.placeholder = page.getByPlaceholder("years of automation experience")
  }

  async typeInExperience(words: string) {
    await this.placeholder.type(words);
  }

  

}
