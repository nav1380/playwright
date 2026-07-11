import { expect, Locator, Page } from "@playwright/test";

export class AutomationPlaygroundFormsPage {
  private readonly page: Page;
  private readonly expInput: Locator;
  private readonly primarySkill: Locator;
  private readonly language: Locator;
  private readonly notes: Locator;
  private readonly expVal: Locator;
  private readonly readOnly: Locator;
  private readonly formGroup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.expInput = page.getByPlaceholder("years of automation experience");
    this.primarySkill = page.getByRole("combobox", { name: "Primary Skill" });
    this.language = page.getByRole("listbox", { name: "Choose Language" });
    this.notes = page.getByPlaceholder("Notes");
    this.expVal = page.locator('[id="exp_help"]');
    this.readOnly = page.locator("#common_sense");
    this.formGroup = page.locator(".form-group");
  }

  async typeInExperience(words: string) {
    await this.expInput.type(words);
  }

  async typeInNotes(words: string) {
    await this.notes.type(words);
  }

  async chooseInSkill(choice: string) {
    switch (choice.toLowerCase()) {
      case "selenium":
        await this.primarySkill.selectOption("sel");
        break;
      case "protractor":
        await this.primarySkill.selectOption("pro");
        break;
      case "cypress":
        await this.primarySkill.selectOption("cyp");
        break;
    }
  }

  async chooseLanguage(choice: string) {
    switch (choice.toLowerCase()) {
      case "java":
        await this.language.selectOption("java");
        break;
      case "python":
        await this.language.selectOption("python");
        break;
      case "javascript":
        await this.language.selectOption("javascript");
        break;
      case "typescript":
        await this.language.selectOption("typescript");
        break;
    }
  }

  async chooseInCheckbox(choice: string) {
    switch (choice.toLowerCase()) {
      case "java":
        await expect(this.formGroup.locator("#check_java")).toBeDisabled();
        break;
      case "python":
        await this.formGroup.locator("#check_python").click();
        break;
    }
  }

  getExpVal() {
    return this.expVal;
  }

  getReadOnly() {
    return this.readOnly;
  }
}
